from flask import Flask, jsonify
from corsOrigins import getOrigins
from flask_cors import CORS, cross_origin
from cryptography.fernet import Fernet
import os 
import json

KEY = '-BIKN0RdQBg1FDWPyNOCaFzS6e9LfxHa95O431zD1hE='

application = Flask(__name__)


@application.route("/")
@cross_origin(origins=getOrigins())
def hello_world():
    return jsonify({"message": "Hello World"})

def generate_key():
    return Fernet.generate_key()

def encrypt(data, key):
    fernet = Fernet(key)
    encrypted_data = fernet.encrypt(json.dumps(data).encode())
    return encrypted_data

def decrypt(filename, key):
    fernet = Fernet(key)
    with open(filename, "rb") as encrypted_file:
        encrypted_data = encrypted_file.read()
    decrypted_data = fernet.decrypt(encrypted_data)
    return json.loads(decrypted_data.decode())

def read_drive(drive_path):
    if os.path.exists(drive_path) and os.path.isdir(drive_path):
        files = os.listdir(drive_path) 
        if not files:
            print(f"The USB drive '{drive_path}' is empty.")
            return None
        for file in files:
            if file == 'data.bin':
                return file
        return None
    else:
        print(f"The path '{drive_path}' does not exist or is not a directory.")
        return None
    
def detect_drives():
    os.chdir('/Volumes')
    List = os.listdir()
    i = 0
    while i < len(List):
        if (List[i] == 'Macintosh HD'):
            del List[i:i+1]
            continue
        else:
            List[i] = '/Volumes/' + List[i]
            i += 1
    if i == 0:
        print("No USB drives detected.")
        return None
    return List

def read_file(file_path, key):
    return decrypt(file_path, key)

def read_raw_json():
    data = []
    for drive in detect_drives():
        file = read_drive(drive)
        data.append(read_file(os.path.join(drive, file), KEY))
    return data


@application.route("/get-roster")
@cross_origin(origins=getOrigins())
def get_roster():
    data = read_raw_json()[0]
    print(data)
    cards = data["cards"]
    roster = data["roster"]
    result = {}
    result["activeCards"] = []
    for card in cards:
        if card["type"] == 'commander':
            result["commanderImage"] = card["image"]
            result["commanderName"] = card["name"]
            result["commanderPerk"] = card["perk"]
            result["commanderPerkDescription"] = card["perk-desc"]
            result["commanderAttributes"] = {"attack": card["att"], "defense": card["def"], "stealth": card["ste"]}
        else:
            result["activeCards"].append(card)
    result["roster"] = roster
    print(result)
    return jsonify(result)
            
    
    
    # read from USB
    # parse data
    return


    {
        commanderImage: "/char1.png",
        commanderName: "Commander Name",
        perkName: "Perk Name",
        perkDescription: "Perk Description",
        activeDeck: ['/char2.png', 'char3.png', 'char4.png'],
        roster: ['/char1.png', '/char2.png', '/char3.png', '/char4.png'],
        commanderAttributes: {attack: 42, defense: 42, stealth: 42},
        mercenaryAttributes: {}
        
    }
    return jsonify({"message": "Hello World"})


if __name__ == "__main__":
    # Setting debug to True enables debug output. This line should be
    # removed before deploying a production app.
    application.debug = True
    application.run()

    # print(data)

    
