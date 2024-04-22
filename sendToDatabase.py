from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from pymongo import MongoClient, InsertOne
import pymongo
import json

uri = "mongodb+srv://atteruthvik:Jayadeep@cluster0.lua9rfl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi("1"))

# Send a ping to confirm a successful connection
try:
    client.admin.command("ping")
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)


cluster = MongoClient("mongodb+srv://User1:<password>@cluster0.hl9auoo.mongodb.net/")
db = client.Social_Justice
Collection1 = db.Data
Collection2 = db.Data1
Collection3 = db.Data2


# with open("Air_Pollution_Data.json") as f:
#     file_data = json.load(f)

# print(file_data)
# collection._insert_one(file_data)
# client.close()
# Load GeoJSON data from file
with open("output3.geojson", "r") as f:
    geojson_data = json.load(f)

# Insert GeoJSON features into MongoDB
Collection3.insert_many(geojson_data["features"])

# Optional: Print the inserted document IDs
# print("Inserted document IDs:", Collection2.distinct("_id"))


# Inserting the loaded data in the Collection
# if JSON contains data more than one entry
# insert_many is used else insert_one is used


# if isinstance(file_data, list):
#     Collection.insert_many(file_data)
# else:
#     Collection.insert_one(file_data)
