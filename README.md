# CMS APP
A simple cms web app that build using NodeJS for server, and MySQL for DB. This web app can save Employee data.

## Framework and Library
* Express
* Express generator
* EJS
* Body Parser
* Nodemon

## Design Database
The DB for this web app using MySQL, with the DB design
* DB name: mysql_cms
* There are 5 rows in the DB column:
  * full_name -> INT -> 35 
  * position -> CHAR -> 20
  * department -> CHAR -> 20
  * user_id -> CHAR -> 8
  * password -> CHAR -> 8
  * address -> CHAR -> 50
  
## Features
* CRUD employee DB
* REST API
* Auto-capitalized Fullname input
* Auto-generate random unique userID input

## How to Run
* Clone the repo
* Build DB using mySQL with the explanation Design Database
* Run npm install on terminal
* Run npm start

## Progress
This project need to improve:
* Check and remind to combine number and text for password input
* Fetch value dropdown menu data for department (update method)
* Fixing update method for DB

