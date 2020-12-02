import datetime

from flask_mongoengine import MongoEngine

db = MongoEngine()

class Word(db.Document):
    word = db.StringField(max_length=60)