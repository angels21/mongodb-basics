const assert = require('assert');
const updateMovies = function(db, callback) {
	// Get the documents collection
	const collection = db.collection('myMovies');
    //field to update in document
    const myquery = {movie:"The Banker"};
    //new fields
    const newvalues = {$set:{movie:"Money Heist", year:"2019", rating:10}};
	//update document function 
	collection.updateOne(myquery, newvalues, function(err, result) {
	  assert.equal(err, null);
	  console.log("sucessfully updated one movie document");
	  console.log(result);
	  callback(result);
	});
	

};
module.exports = updateMovies;