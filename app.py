# app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
from utils import get_player, update_player, load_data

app = Flask(__name__)
CORS(app)

@app.route("/player/<name>", methods=["GET"])
def fetch_player(name):
    player = get_player(name)
    return jsonify(player)

@app.route("/player/<name>/update", methods=["POST"])
def update_player_data(name):
    data = request.json
    player = get_player(name)
    player.update(data)
    update_player(player)
    return jsonify({"status":"success","player":player})

@app.route("/players", methods=["GET"])
def all_players():
    return jsonify(load_data()["players"])

if __name__=="__main__":
    app.run(host="0.0.0.0", port=3000)
