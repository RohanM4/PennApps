import subprocess
import os

# Directory paths for frontend and backend
frontend_dir = os.path.abspath('/Users/rohan/Desktop/PennApps/frontend')
backend_dir = os.path.abspath('/Users/rohan/Desktop/PennApps/backend')

try:
    subprocess.run(['npm', 'start'], cwd=frontend_dir, check=True)
    subprocess.run(['python', 'application.py'], cwd=backend_dir, check=True)
except subprocess.CalledProcessError as e:
    print(f"An error occurred: {e}")