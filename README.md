## Intro

This project gives me an introduction to technologies such as Docker, docker-compose, Flask, angular.io and a nosql database as mongodb.

In it, a list of words are retrieved from the database and displayed in the web application, this list can be later reordered via drag and drop, and the resulting order will be persistent.
Along with this list, the app also has an input box where the user can type a word. This word is sent to the backend to select the words on the list that are anagrams of the given word, wich are displayed as bold in the app.

To start working on it, you can clone the repository locally and follow the steps below.

```
git clone https://github.com/PedroDDiez/flask-postgis-test.git <project-name>
```

## Requirements

I've created two Dockerfiles and a docker-compose.yml to make the app run easily, so it is neccesary to have docker and docker-compose installed in your machine, if you don't have it installed, you can have more information here on how to do it:
 - Docker: https://docs.docker.com/install/
 - Docker-compose: https://docs.docker.com/compose/install/

There is an endpoint to populate the database with the list of words to show. One tool to this can be curl:
 - Curl: https://curl.se/   

The application runs in the port 80 of your localhost, so it has to be free to be able to run it

## Quick Start

Build the images if the images do not exist and start the containers:
```sh
cd /location/of/the/app
docker-compose up
```

The first time you run the app the database is empty, to populate it run this command in a new terminal while the containers are running:

```sh
curl --location --request PUT 'http://127.0.0.1:8000/api/word_list' --header 'Content-Type: application/json' --data-raw '{ "word_list": ["esto", "es", "un", "buen", "seto"] }'
```


After this, the application should be up and running, so go to your web-browser and open the http://127.0.0.1/ url there you will see the list of words that you can reorder using drag and drop. Also you can play with the anagram input box to see how the anagrams are displayed as bold as you type it.

## Considerations

I've split the code in two folders, one for the front and the other for the back:
 - back: written in python using flask
 - front: written in angular.io
I've also created a folder to hold the Dockerfiles used:
 - dockerfiles
 

## Links

1. Flask boilerplate: https://github.com/tiangolo/uwsgi-nginx-flask-docker
2. Flask: https://palletsprojects.com/p/flask/
3. Flask mongo engine: https://github.com/MongoEngine/flask-mongoengine
4. Docker mongodb: https://hub.docker.com/r/slyn/mongodb 
5. Angular drag and drop: https://material.angular.io/cdk/drag-drop/examples 
6. Angular tutorial: https://angular.io/tutorial/toh-pt1
