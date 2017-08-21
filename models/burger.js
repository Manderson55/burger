// Import the ORM.js 
var orm = require('../config/orm.js');

// Create the burger object
var burger = {
  // Select all burger table entries
  selectAll: function(cb) {
    orm.selectAll('burgers', function(res) {
      cb(res);
    });
  }

  // do insert and update

 
};

// Export burger var
module.exports = burger;