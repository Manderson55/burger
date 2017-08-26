var connection = require("./connection.js");

// Object Relational Mapper (ORM)

var orm = {
  selectAll: function(table, callback) {
      var queryString = "SELECT * FROM " + table;
      connection.query(queryString, function(err, result) {
          if (err) throw err;
          callback(result);
    })
  },
  insert: function(table, burgerName, callback) {
      var queryString = "INSERT INTO " + table + " (burger_name) VALUES ('" + burgerName + "');";
      console.log(queryString);
      connection.query(queryString, function(err, result) {
          if (err) throw err;
          console.log(result);
          callback(result)
      })
  },
  update: function(table, id, callback) {
 //  var queryString = "UPDATE " + table + " SET devoured = true WHERE id = "+ id;;
      var queryString = connection.query("UPDATE burgers SET ? WHERE ?",
      [
      {
        devoured: true
      },
      {
        id: id
      }


      ],
 
 
      function(err, result) {
          if (err) throw err;
          console.log(queryString);
          console.log(result);
          callback(result);
       }

   );
 }

}

module.exports = orm;
