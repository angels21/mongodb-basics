findInterns.js

const assert = require('assert');
const findMovies = function(db, callback) {
	// Get the documents collection
	const collection = db.collection('myMovies');
	//find document with rating query 7

	// Find some documents
	collection.find({}, {projection:{_id:0, movie:1}}).toArray(function(err, result) {
	  assert.equal(err, null);
	  console.log("Found the following movie titles");
	  console.log(result);
	  callback(result);
	});
	

};
module.exports = findMovies;