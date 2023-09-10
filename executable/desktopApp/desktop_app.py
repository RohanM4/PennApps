import tkinter as tk
from tkinter import ttk
import subprocess
import os

def start_npm():
    directory_path = '/Users/rohan/Desktop/PennApps/frontend'

    if os.path.exists(directory_path):
        try:
            os.chdir(directory_path)
            subprocess.Popen(["npm", "start"])
        except Exception as e:
            print(str(e))
    else:
        pass

app = tk.Tk()
app.title("PlayPort Select Screen")

bg_image = tk.PhotoImage(file="battle_background.jpeg")
bg_label = tk.Label(app, image=bg_image)
bg_label.place(relwidth=1, relheight=1)

choices = ["Select an option", "Flash Kingdom"]
choice_var = tk.StringVar(value=choices[0])
choice_menu = ttk.Combobox(app, textvariable=choice_var, values=choices)
choice_menu.pack()

start_button = tk.Button(app, text="Run Application", command=start_npm)
start_button.pack()

app.mainloop()