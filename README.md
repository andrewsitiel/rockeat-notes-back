# AppNotes

Back-End of an application for management of notes developed with NodeJs and using SQLite as SGBD.

## Techs

- [Express](https://expressjs.com/)
- [Knex](http://knexjs.org/)
- [SQLite](https://www.sqlite.org/index.html)

## Routes

### /users

The users route supports *post* and *put* methods to **create** and **update** users in database. The put method needs an id param for identify the correct user.

### /notes

The notes routes supports *get*, *post*, *put* and *delete* methods to **show** a specific note, to **update** a note, to **delete** a note and an index to **query** a note for his title, tags or only for the user's id (list all user's notes). All methods requires an id param:

- ```get``` (index) - require de user_id, and has title and tags search as optional. In this case, it's using queries and not params.
- ```post``` - needs the user_id, for identify the owner of the note (params).
- ```get``` (show) - needs an id for identify the note (params).
- ```put``` - also needs an id for identify the note (params).
- ```delete``` - the same of above methods (params).

### /tags
-The tags route supports the *get* method, to **show** all user registered tags. Needs the user_id for identify the tags.

## How to use

 After install all dependencies (with ```npm install```), just run ```npm start``` in terminal for initialize the server. The standart port is 5000 but is changeable in server.js file.
