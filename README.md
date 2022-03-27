# BostonHacks Technical Challenge Template

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Steps to Start Project

Fork and clone this repo. Then In the `/frontend` directory, you can run:

1) `npm install`

2) `npm run build`

Exit the `/frontend` directory, then run:

3) `flask run` *May need to install python packages by `pip install <package-name>`

4) Open [http://localhost:5000](http://localhost:5000) to view it in your browser.

## User Goals
* Create todo items
* Delete todo items
* Todo items have persistent storage, aka they remain after refreshing the page, created by app.py

## Tips
`/frontend`
* Contains all the frontend (React) code and some public files that you don't need to touch.
* You will only need to work on `/frontend/src/App.js` Specifically, understand what axios.get() is doing.
* Observe live changes on the frontend: run `npm start`, instad of step 2, and open [http://localhost:3000](http://localhost:3000), instead of step 4

`/app.py`
* Contains all the backend (Python) code.
* You will need to add methods to store and retreive todo items for persistent storage. Specifically, understand how @app.route() works
* When working on the backend: use [Postman](https://www.postman.com/downloads/) to send HTTP requests
* Store todo items in a .json file for persistent storage
