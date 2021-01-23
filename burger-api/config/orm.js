let connection;
if(process.env.defaultDatabase == 'mysql') {
  connection = require("./connection");
} else {
  connection = require("./connection_postgres");
}

// Helper function for SQL syntax.
// Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push(process.env.defaultDatabase == 'mysql' ? '?' : `$${i+1}`);
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

const getResult = (result) => process.env.defaultDatabase !== 'mysql' ? result.rows : result;

let orm = {
    // selectAll()
    selectAll: function(table,callback) {
        let query = `SELECT * FROM ${table}`
        connection.query(query,[], (error, result) => {
            if (error) {
                throw error;
            }
            callback(getResult(result));
        })
   
    },

    //insertOne()
    insertOne: function(table,cols,vals,callback) {
        let query = "INSERT INTO " + table;

        query += " (";
        query += cols.toString();
        query += ") ";
        query += "VALUES (";
        query += printQuestionMarks(vals.length);
        query += ") ";

        console.log(query);

        connection.query(query, vals, (error,result) => {
            if (error) {
                throw error;
            }
            callback(result);
        })
    },

    // updateOne()
    updateOne: function(table, objColVals, condition, callback) {
        let query = "UPDATE " + table;

        query += " SET ";
        query += objToSql(objColVals);
        query += " WHERE ";
        query += condition;
    
        console.log(query);
        connection.query(query, function(error, result) {
          if (error) {
            throw error;
          }
    
          callback(result);
        });
      }

}
//export ORM object
module.exports = orm;