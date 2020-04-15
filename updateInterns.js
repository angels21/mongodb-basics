const assert = require('assert');

const updateMovies = function(db, callback) {
	// Get the documents collection
	const collection = db.collection('myMovies');
    //field to update in document
    const myquery = {movie:"The Banker"};
    //new fields
    const newvalues = {$set:{movie:"Money Heist", year:"2018", rating:9}};
	//update document function 
	collection.updateOne(myquery, newvalues, function(err, result) {
      assert.equal(err, null);

      assert.equal(1, result.result.n);

	  callback(result);
	});
	//Display the result to console
	collection.find({}).toArray(function(err, result) {
		assert.equal(err, null);
		console.log("The collection was successfully updated as follows", result);
		
	});
};

module.exports = updateMovies;