# Dependencies
from flask import Flask, request, render_template
import sqlite3
import requests
import json

# Initialize Flask
app = Flask(__name__)

# Initialize Database
conn = sqlite3.connect('data/space_x.db')
c = conn.cursor()

# Gather data from Space-X API
@app.route('/api/all_launches')
def get_data():
    response = requests.get('https://api.spacexdata.com/v3/launches')
    data = response.json()
    return Response(data)

# Defining Routes
@app.route('/')
def index():
    return render_template('home.html')

@app.route('/missions')
def missions():
        return render_template('/missions.html')

@app.route('/about')
def about():
        return render_template('/about.html')

# Run Application
if __name__ == '__main__':
   app.run(debug = True)
