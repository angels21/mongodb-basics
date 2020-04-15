const assert = require('assert');

const findMoviesrating = function(db, callback) {
	// Get the documents collection
	const collection = db.collection('myMovies');
	//find document with query rating:7
    const query = {rating:7};
	// Find some documents
	collection.find(query).toArray(function(err, result) {
	  assert.equal(err, null);
	  console.log("Found the following documents with ratings of 7");
	  console.log(result);
	  callback(result);
    });	

};
module.exports = findMoviesrating;

const findMoviestitles = function(db, callback)  {
	const collection = db.collection('myMovies');

	collection.find({}, {projection:{_id:0, movie:1}}).toArray(function(err, result)  {
	assert.equal(err, null);
	console.log("Found the following movie titles");
	console.log(result);
	callback(result);
});
};
module.exports = findMoviestitles;

const findMoviesfirst = function(db, callback)  {
	const collection = db.collection('myMovies');

	collection.findOne({}, (function(err, result)  {
	  assert.equal(err, null);
	  console.log("Found the following record as first occurence");
	  console.log(result);
	  callback(result);
      })
    );
};
module.exports = findMoviesfirst;