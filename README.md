#Start server at localhost:8080
npm start

#tests
npm test

Notes:
Follows 3 layer architecture:
controller: api layer
model: database access layer
service: business logic

#testing
Extensive tests are not expected at the moment but it is supported. Currently all tests are written in test/test.js
If writing mutliple tests it would be best to break this into multiple files.

#####replica database: It should create a seperate test area and copy the collection for the tests
so as to not pollute the original database however, as its not a requirement it has not yet
been verified.

#Database:
Currenty runs on a local mongodb instance this needs to be changed to run on the cloud instance.
Atlass additionally requires whitelisting of all IPs accessing the database.
-@Thiri please disable this or whitelist each group members IP so that we can all
access the database during development.
