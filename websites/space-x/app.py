# Dependencies:
# ============================================================================ #
from flask import Flask, request, render_template
from flask_pymongo import PyMongo
from bson.json_util import dumps
from flask_cors import CORS
import sqlite3
import requests
import json
from pprint import pprint

# Initialize Flask
# ============================================================================ #
app = Flask(__name__)
# This line fixes errors with local host
CORS(app)

# Initialize Database
# ============================================================================ #
app.config["MONGO_URI"] = "mongodb://localhost:27017/spaceX"
mongo = PyMongo(app)

# Database Collection Routes:
# ============================================================================ #
@app.route('/db/capsules')
def capsulesData():
    capsules = mongo.db.capsules.find()
    return dumps(capsules)

@app.route('/db/cores')
def coresData():
    cores = mongo.db.cores.find()
    return dumps(cores)

@app.route('/db/dragons')
def dragonsData():
    dragons = mongo.db.dragons.find()
    return dumps(dragons)

@app.route('/db/history')
def historyData():
    history = mongo.db.history.find()
    return dumps(history)

@app.route('/db/info')
def infoData():
    info = mongo.db.info.find()
    return dumps(info)

@app.route('/db/landpads')
def landpadsData():
    landpads = mongo.db.landpads.find()
    return dumps(landpads)

@app.route('/db/launches')
def launchesData():
    launches = mongo.db.launches.find()
    return dumps(launches)

@app.route('/db/launchpads')
def launchpadsData():
    launchpads = mongo.db.launchpads.find()
    return dumps(launchpads)

@app.route('/db/missions')
def missionsData():
    missions = mongo.db.missions.find()
    return dumps(missions)

@app.route('/db/payloads')
def payloadsData():
    payloads = mongo.db.payloads.find()
    return dumps(payloads)

@app.route('/db/rockets')
def rocketsData():
    rockets = mongo.db.rockets.find()
    return dumps(rockets)

@app.route('/db/roadster')
def roadsterData():
    roadster = mongo.db.roadster.find()
    return dumps(roadster)

@app.route('/db/ships')
def shipsData():
    ships = mongo.db.ships.find()
    return dumps(ships)

# Defining App Routes:
# ============================================================================ #
@app.route('/')
def index():
    return render_template('home.html')

@app.route('/missions')
def missions():
        return render_template('/missions.html')

@app.route('/about')
def about():
        return render_template('/about.html')

# In Developement: Direct API calls
# @app.route('/db/allLaunches')
# def allLaunches():
#     response = requests.get('https://api.spacexdata.com/v3/launches')
#     data = json.dumps(response.text)
#     return data

# Run Application
# ============================================================================ #
if __name__ == '__main__':
   app.run(debug = True)
