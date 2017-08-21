var connection = require("./connection.js");

// Helper function for SQL syntax.
// Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];

	  // loop through the keys and push the key/value as a string int arr
	for (var key in ob) {
	    var value = ob[key];
	    // check to skip hidden properties
	    if (Object.hasOwnProperty.call(ob, key)) {
	        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
	        if (typeof value === "string" && value.indexOf(" ") >= 0) {
	               value = "'" + value + "'";
	        }
	        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
	        // e.g. {sleepy: true} => ["sleepy=true"]
	        arr.push(key + "=" + value);
	    }
	}

    // translate array of strings to a single comma-separated string
    return arr.toString();
}

// Object Relational Mapper (ORM)

var orm = {
  selectAll: function(table, callback) {
    var queryString = "SELECT * FROM " + table;
    connection.query(queryString, function(err, result) {
      callback(result);
    });
  },
  insert: function(table, burgerName) {
    var queryString = "INSERT INTO " + table;
    queryString += " (";
    queryString += burger_name, devoured;
    queryString += ") ";
    queryString += "VALUES (";
    queryString += burgerName;
    queryString += ", false) ";
    console.log(queryString);
    connection.query(queryString, function(err, result) {
      console.log(result);
      callback(result)
    });
  },
  update: function(table, id, callback) {
   var queryString = "UPDATE " + table;

    queryString += " SET devoured = true WHERE id = ";
    queryString += id;
      connection.query(queryString, function(err, result) {
      console.log(queryString);
      console.log(result);
      callback(result)
    });
  }
};

module.exports = orm;