const { Comment, Like, Post, Profile, User } = require("./models/index");

User.hasOne(Profile);
Profile.hasOne(User);
User.hasMany(Post);
Post.belongsTo(User);
Post.hasMany(Comment);
Comment.belongsTo(Post);
User.belongsToMany(Like, {through : 'userLikes'});
Like.belongsToMany(User, {through :'userLikes'});




module.exports = {
    Comment,
    Like,
    Post,
    Profile,
    User
}