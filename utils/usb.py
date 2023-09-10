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

# drive = detect_drives()[0]
# with open(os.path.join(os.getcwd(), 'utils/example.json'), 'r') as file:
#     write_drive(drive, json.load(file), KEY)

# # How to read from the USB
# data = []
# for drive in detect_drives():
#     file = read_drive(drive)
#     data.append(read_file(os.path.join(drive, file), KEY))
    


if __name__ == '__main__':
    elite_player_data = {	
	"cards" : [
		{
			"type" : "commander",
			"name" : "Skell. A. Ton",
			"id" : 1,
			"perk" : "Bone Bash",
			"perk-desc" : "Attacks do +2 Damage",
			"games" : -1,
			"att" : 7,
			"def" : 3,
			"ste" : 5,
			"hp" : 15,
			"image" : "char9.png"
		},
		{
			"type" : "mercenary",
			"name" : "joe mama",
			"id" : 2,
			"perk" : None,
			"perk-desc" : None,
			"games" : 5,
			"att" : 7,
			"def" : 3,
			"ste" : 4,
			"hp" : 15,
			"image" : "char2.png"
		},
		{
			"type" : "mercenary",
			"name" : "b",
			"id" : 3,
			"perk" : None,
			"perk-desc" : None,
			"games" : 5,
			"att" : 7,
			"def" : 3,
			"ste" : 4,
			"hp" : 15,
			"image" : "char3.png"
		},
        {
			"type" : "mercenary",
			"name" : "Ben Dover",
			"id" : 4,
			"perk" : None,
			"perk-desc" : None,
			"games" : 5,
			"att" : 7,
			"def" : 3,
			"ste" : 4,
			"hp" : 15,
			"image" : "char1.png"
		}
	],
	"roster" : [
        {
			"type" : "mercenary",
			"name" : "joe mama",
			"id" : 1,
			"perk" : 1,
			"perk-desc" : "chappal",
			"games" : -1,
			"att" : 7,
			"def" : 3,
			"ste" : 4,
			"hp" : 15,
			"image" : "char5.png"
		},
		{
			"type" : "mercenary",
			"name" : "a",
			"id" : 2,
			"perk" : None,
			"perk-desc" : None,
			"games" : 5,
			"att" : 7,
			"def" : 3,
			"ste" : 4,
			"hp" : 15,
			"image" : "char6.png"
		},
		{
			"type" : "mercenary",
			"name" : "b",
			"id" : 3,
			"perk" : None,
			"perk-desc" : None,
			"games" : 5,
			"att" : 7,
			"def" : 3,
			"ste" : 4,
			"hp" : 15,
			"image" : "char3.png"
		},
        {
			"type" : "mercenary",
			"name" : "joe mama",
			"id" : 1,
			"perk" : 1,
			"perk-desc" : "chappal",
			"games" : -1,
			"att" : 7,
			"def" : 3,
			"ste" : 4,
			"hp" : 15,
			"image" : "char2.png"
		},
        {
			"type" : "mercenary",
			"name" : "joe mama",
			"id" : 1,
			"perk" : 1,
			"perk-desc" : "chappal",
			"games" : -1,
			"att" : 7,
			"def" : 3,
			"ste" : 4,
			"hp" : 15,
			"image" : "char5.png"
		},
        {
			"type" : "mercenary",
			"name" : "joe mama",
			"id" : 1,
			"perk" : 1,
			"perk-desc" : "chappal",
			"games" : -1,
			"att" : 7,
			"def" : 3,
			"ste" : 4,
			"hp" : 15,
			"image" : "char8.png"
		}
    ]
    }

    drive = detect_drives()[0]
    write_drive(drive, elite_player_data, KEY)