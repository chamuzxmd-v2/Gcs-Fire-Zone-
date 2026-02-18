# utils.py
import json

DATA_FILE = "data.json"

def load_data():
    with open(DATA_FILE, "r") as f:
        return json.load(f)

def save_data(data):
    with open(DATA_FILE, "w") as f:
        json.dump(data, f, indent=2)

def get_player(player_name):
    data = load_data()
    for p in data["players"]:
        if p["name"] == player_name:
            return p
    # If not found, create new player
    new_player = {
        "name": player_name,
        "coins": 0,
        "gems": 0,
        "xp": 0,
        "level": 1,
        "rank": "Bronze",
        "skins": [],
        "emotes": []
    }
    data["players"].append(new_player)
    save_data(data)
    return new_player

def update_player(player):
    data = load_data()
    for i,p in enumerate(data["players"]):
        if p["name"] == player["name"]:
            data["players"][i] = player
            break
    save_data(data)
