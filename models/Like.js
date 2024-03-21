const {db, DataTypes} = require('../db/connection.js');

const Like = db.define('Like', {
    reactionType: DataTypes.STRING,
    createdAt: DataTypes.STRING
})

module.exports = Like;