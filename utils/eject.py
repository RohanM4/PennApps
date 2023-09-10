import subprocess
import os

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

def eject_usb_drive_unix(device_path):
    try:
        # Run the eject command
        subprocess.run(['drutil tray eject', device_path], check=True)
        print(f"USB drive at {device_path} has been ejected successfully.")
    except subprocess.CalledProcessError as e:
        print(f"Error ejecting USB drive at {device_path}: {e}")

# Specify the device path of the USB drive you want to eject (e.g., '/dev/sdX')
device_path = detect_drives()[0]
eject_usb_drive_unix(device_path)