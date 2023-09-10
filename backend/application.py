from flask import Flask, jsonify, Response
from corsOrigins import getOrigins
from flask_cors import CORS, cross_origin
from cryptography.fernet import Fernet
import os 
import json
from flask import request

KEY = '-BIKN0RdQBg1FDWPyNOCaFzS6e9LfxHa95O431zD1hE='

application = Flask(__name__)
CORS(application)



@application.route("/")
@cross_origin(origins=getOrigins())
def hello_world():
    return jsonify({"message": "Hello World"})

def generate_key():
    return Fernet.generate_key()

def write_drive(drive_path, data, key):
    encrypted_data = encrypt(data, key)
    with open(os.path.join(drive_path, 'data.bin'), "wb") as encrypted_file:
        encrypted_file.write(encrypted_data)


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


@application.route("/write-to-file", methods=['POST'])
@cross_origin(origins=getOrigins())
def write_to_file():
    try:
        print(request)
        drive = detect_drives()[0]
        write_drive(drive, json.loads(request.data), KEY)
        return jsonify({"status": "success"}), 200
    except Exception as e:
        print(str(e))
        return jsonify({"status": "failed"}), 400

@application.route("/get-roster")
@cross_origin(origins=getOrigins())
def get_roster():
    data = read_raw_json()[0]
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

@application.route("/transfer-player")
@cross_origin(origins=getOrigins())
def transfer_player():
    try:
        player1 = read_raw_json()[0]
        player2 = read_raw_json()[1]
        # commander1 = player1["cards"][0];
        # commander2 = player2["cards"][0];
        
        # card_to_roster2 = player2["cards"].pop()
        # player2["cards"].append(commander1)
        # print(player2)
        # assert len(player2["cards"]) == 4
        # # player2["roster"].append(card_to_roster2)
        
        # card_to_roster = player1["cards"].pop()
        # player1["cards"].append(commander2)

        for i in range(len(player1["cards"])):
            if player1["cards"][i]["name"] != 'Dark K. Night':
                player1["cards"][i]["image"] = 'char9.png'
                break
        for i in range(len(player2["cards"])):
            if player2["cards"][i]["name"] != 'Skell. A. Ton':
                player2["cards"][i]["type"] = 'char4.png'
                break
        
        print('====================')
        print(player1)
        print('====================')
        
        
        print('====================')
        print(player2)
        print('====================')
        # player1["roster"].append(card_to_roster)
        
        drive = detect_drives()[0]
        write_drive(drive, player1, KEY)
        
        
        drive = detect_drives()[1]
        write_drive(drive, player2, KEY)
        return jsonify({"status": "success"}), 200
    except Exception as e:
        print(str(e))
        return jsonify({"status": "failed"}), 400


if __name__ == "__main__":
    # Setting debug to True enables debug output. This line should be
    # removed before deploying a production app.
    application.debug = True
    application.run()

    # print(data)

    
