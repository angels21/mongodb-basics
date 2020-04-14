const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
//imported functions

const updateMovies = require('./updateInterns')

//connection to URL
const url = 'mongodb://localhost:27017';

//Database Name
const dbName = 'wizman';
//create a new client
const client = new MongoClient (url, {useUnifiedTopology: true,
                                      useNewUrlParser: true});
//method to connect to server
    client.connect(function(err) {
    assert.equal(null, err);
    console.log("Successfully connected to server");

    const db =client.db(dbName);
    
        updateMovies(db, function() {
        client.close();

        });
     
});       
