const {db, DataTypes} = require('../db/connection.js');

const Comment = db.define('Comment', {
    body: DataTypes.STRING,
    createdAt: DataTypes.STRING
});


module.exports = Comment;