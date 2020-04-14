const assert = require('assert');
const findMovies = function(db, callback) {
	// Get the documents collection
	const collection = db.collection('myMovies');
	//find document with query rating:7
    const query = {rating:7};
	// Find some documents
	collection.find(query).toArray(function(err, result) {
	  assert.equal(err, null);
	  console.log("Found the following movie as first occurence");
	  console.log(result);
	  callback(result);
    });	

};
module.exports = findMovies;