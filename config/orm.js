var connection = require("../config/connection.js");

var orm = {
  
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result){
            // if (err) {
            //     throw err;
            // }
            if (err) {
                console.log(err);
            }
            cb(result);
        })
    },

    insertOne: function(tableInput, item, cb) {

    var queryString = `INSERT INTO ` + tableInput + ` (burger_name, devoured) VALUES ("` + item + `",  FALSE);`;
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })
    },
        
    updateOne: function(tableInput, item, cb) {
        var queryString = `UPDATE ` + tableInput + ` SET devoured = TRUE WHERE (burger_name = "` + item +`");`;
        connection.query(queryString, function(err, result){
            if (err) {
                console.log(err);
            }
            cb(result)
        })
    }
};

module.exports = orm;

