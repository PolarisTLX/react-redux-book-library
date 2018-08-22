# README

## Check it out live on Heroku: [MERN Library with React and Redux](https://mern-stack-book-library.herokuapp.com/)

## MERN Library Project with Redux

This is a full-stack project with Redux, written to be compatible with two different backend frameworks built using:

* React as the frontend library + ReactStrap
* Redux for state control

AND

* Express.js and Node.js as the backend server
* MongoDB (through MLab) as the database

OR - [An alternate compatible backend located here](https://github.com/jklemon17/book-library-api) which uses:

* Ruby on Rails as the backend server
* SQLite3 as the database



You can add, delete, and edit books from the library as well as keep track of your current progress through your books.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes using the MERN stack with Express and MongoDB.  (If you wish to use the Ruby on Rails backend API, [go here](https://github.com/jklemon17/book-library-api).

### Prerequisites

This project runs on Node.js and uses the Node Package Manager (npm).

### Installing

* Clone the repo
* cd into the folder
* Run `npm install` and `npm run client-install` to install the necessary packages

### Serve Project

Run the servers with the following command:

```
npm run dev
```

Once its running, head over to your browser to [see the Library](http://localhost:3000/).

### Deploy on Heroku

You can deploy the project on [Heroku](https://www.heroku.com/) using the following steps:

1. Create a Heroku Account
2. On the terminal, run `heroku create` to create a new app
3. Run `git push heroku master` to start a deployment on Heroku.
4. Visit your project URL as assigned by Heroku (`heroku open`) to see a live deployment of the app.


## Authors

* **Paul Rail** - [PolarisTLX](https://github.com/PolarisTLX)
* **Kyle Lemon** - [jklemon17](https://github.com/jklemon17)
