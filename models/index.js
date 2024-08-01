const BlogPosts = require('./BlogPosts');
const Users = require('./Users');
const Comment = require('./Comment');

Users.hasMany(BlogPosts, {
	foreignKey: 'createrId',
	onDelete: 'CASCADE'
});

BlogPosts.belongsTo(Users, {
	foreignKey: 'createrId',
});

BlogPosts.hasMany(Comment, {
	foreignKey: 'createrId',
});

Comment.belongsTo(BlogPosts,{
	foreignKey: 'creatorId',
})
module.exports = { BlogPosts, Users, Comment };
