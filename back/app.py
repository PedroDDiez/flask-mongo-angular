import flask
from flask_cors import CORS

app = flask.Flask(__name__)
CORS(app)
app.config.from_object(__name__)
app.config["MONGODB_SETTINGS"] = {'db': 'words','host': 'mongodb://mongo/keywords'}
#app.config["TESTING"] = True
app.config["SECRET_KEY"] = "flask+mongoengine=<3"
app.debug = False

from models import db
db.init_app(app)

from views import words, anagrams, word_list
app.add_url_rule("/api/anagrams", view_func=anagrams, methods=['POST'])
app.add_url_rule("/api/words", view_func=words, methods=['POST', 'GET'])
app.add_url_rule("/api/word_list", view_func=word_list, methods=['PUT', 'OPTIONS'])

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=4000)
