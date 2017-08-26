// Import the ORM.js 
var orm = require('../config/orm.js');

// Create the burger object
var burger = {
  // Select all burger table entries
  	selectAll: function(cb) {
    	orm.selectAll("burgers", function(result) {
     		cb(result);
        })
    },

 	update: function(id, cb){
  	 	 orm.update("burgers", id, cb);
    },

 	insert: function(name, cb){
 		orm.insert("burgers", name, cb)
 	}
};

// Export burger var
module.exports = burger;