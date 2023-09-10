import os

from encryption import encrypt, decrypt

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
    
def read_file(file_path, key):
    return decrypt(file_path, key)

def write_drive(drive_path, data, key):
    encrypted_data = encrypt(data, key)
    with open(os.path.join(drive_path, 'data.bin'), "wb") as encrypted_file:
        encrypted_file.write(encrypted_data)



# How to write to the USB 
KEY = '-BIKN0RdQBg1FDWPyNOCaFzS6e9LfxHa95O431zD1hE='

import os
import json

drive = detect_drives()[0]
with open(os.path.join(os.getcwd(), 'utils/example.json'), 'r') as file:
    write_drive(drive, json.load(file), KEY)

# How to read from the USB
data = []
for drive in detect_drives():
    file = read_drive(drive)
    data.append(read_file(os.path.join(drive, file), KEY))