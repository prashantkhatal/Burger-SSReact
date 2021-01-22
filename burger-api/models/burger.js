const orm = require("../config/orm");

// create code that will call ORM functions using specific input for the orm

let burger = {
    selectAll: function(callback) {
        orm.selectAll("burgers", function(result) {
            callback(result);
        });
    },

    //insertOne()
    insertOne: function(cols, vals, callback) {
        orm.insertOne("burgers",cols,vals,function(result) {
            callback(result);
        })
    },

    // updateOne()
    updateOne: function(objColVals, condition, callback) {
        orm.updateOne("burgers", objColVals,condition, function(result){
            callback(result);
        })
    }
}

module.exports = burger;