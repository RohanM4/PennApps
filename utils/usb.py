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
        return files
    else:
        print(f"The path '{drive_path}' does not exist or is not a directory.")
        return None
    
def read_file(file_path, key):
    return decrypt(file_path, key)

def write_drive(drive_path, data, key):
    encrypted_data = encrypt(data, key)
    with open(os.path.join(drive_path, 'data.bin'), "wb") as encrypted_file:
        encrypted_file.write(encrypted_data)

