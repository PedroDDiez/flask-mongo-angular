import flask

from models import Word
from itertools import permutations

def words():
    if flask.request.method == 'POST':
        word = flask.request.form.get('word') or flask.request.get_json(force=True).get('word') 
        Word(word=word).save()

    return flask.jsonify([word.word for word in Word.objects.all().order_by('_id')])


def word_list():
    print(flask.request.method)
    if flask.request.method == 'PUT':
        word_list = flask.request.form.get('word_list') or flask.request.get_json(force=True).get('word_list')
        # Remove all words
        if len(word_list) > 0:
            Word.objects().delete()
        # Creates a wordlist
        for word in word_list:
            Word(word=word).save() 

    return flask.jsonify([word.word for word in Word.objects.all().order_by('_id')])


def anagrams():
    if flask.request.method == 'POST':
        word = flask.request.form.get('word') or flask.request.get_json(force=True).get('word')  # word received
        words_list = [word.word for word in Word.objects.all().order_by('_id')]  # words in database
        anagrams = ["".join(anagram) for anagram in permutations(word, len(word))]  # anagrams formed by the word received
        # return only anagrams available in the database 
        return flask.jsonify(list(set(anagrams) & set(words_list)))
    return flask.jsonify([])
