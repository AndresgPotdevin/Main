# Dependencies:
# ============================================================================ #
import pymongo
import requests
import json
from pymongo import MongoClient

# Defining API URL endpoints:
# ============================================================================ #
allCapsules = 'capsules'
allCores = 'cores'
allDragons = 'dragons'
allHistEvents = 'history'
companyInfo = 'info'
landingPads = 'landpads'
allLaunches = 'launches'
allLaunchPads = 'launches'
allMissions = 'missions'
allPayloads = 'payloads'
allRockets = 'rockets'
roadster = 'roadster'
allShips = 'ships'

allURLs = [allCapsules, allCores, allDragons, allHistEvents, companyInfo, \
           landingPads, allLaunches, allLaunchPads, allMissions, allPayloads, \
           allRockets, roadster, allShips]

print(allURLs)

# MongoDB Connection:
# ============================================================================ #
client = MongoClient('mongodb://localhost:27017/')
db = client['spaceX']

# Space-X API Connection & Data import to MongoDB:
# ============================================================================ #
for url in allURLs:
    response = requests.get('https://api.spacexdata.com/v3/' + url)
    print('--------------------------------')
    print(f'Response from {url} endpoint:')
    data = json.loads(response.text)
    print(f'Converted to: {type(data)}')
    if isinstance(data,dict):
        data = [data]
        print('-- Dictionary Detected! Converting to List --')
        print(f'Converted to: {type(data)}')
    db[url].insert_many(data)
    print(f'Storing in Space-X database, under collection: {url}')

# mydoc = mycol.find()
# for x in mydoc:
#     pprint(x)
