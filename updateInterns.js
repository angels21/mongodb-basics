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
    
	  console.log("Sucessfully updated one movie document ", result);
	  callback(result);
	});
	
};
module.exports = updateMovies;