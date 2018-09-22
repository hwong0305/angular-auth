# angular-auth

A simple application that lets user registered and sign in. The purpose of this app is to explore how to build an AngularJS Frontend with an Express backend.

## Table of Contents

1. [Functionality](#Functionality)
2. [Techonoglies](#Technologies-Used)
3. [Screenshots](#Screenshots)
4. [Demonstration](#Demonstration)
5. [Installation](#Installation)

## Functionality

This application allows the users to:

-   Register
-   Login

## Technologies Used

-   MongoDB
-   Angular6
-   Express
-   Node

## Screenshots

### Home

![Home](screenshots/home.png 'Home')

### Login Page

![Login](screenshots/login.png 'Login')

## Register Page

![Register](screenshots/register.png 'Register')

## Dashboard

![Dashboard](screenshots/dashboard.png 'Dashboard')

## Demonstration

It has been deployed to [Heroku](https://mysterious-falls-14943.herokuapp.com/).

Or if you prefer to run the application locally follow the steps below.

## Installation

Clone the repository and change directory into the repo. Run the following commands:

```sh
npm install
cd client
npm install
cd ..
```

Then, build the configuration files.

```sh
touch config/database.js
```

Populate the file with the parameters

```javascript
module.exports = {
    mongoURI: YOURMONGOURI,
    secret: 'YOURSECRETKEY',
    port: process.ENV.PORT || 8081
};
```

Replace YOURMONGOURI with your MongoDB connection, and YOURSECRETKEY with your secret key.

Then run:

```sh
npm start
```

and navigate [here](http://localhost:8081)

Alternatively use the Heroku link.
