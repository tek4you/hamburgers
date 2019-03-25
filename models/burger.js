var orm = require("../config/orm.js");


var burger_task = {
    getBurgers: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        })
    },
    addBurgers: function(item, cb) {
        orm.insertOne("burgers", item, function(res) {
            cb(res); 
        } )
    },
    devourBurger: function(item, cb) {
        orm.updateOne("burgers", item, function(res){
            cb(res);
        })
    }
}

module.exports = burger_task;

