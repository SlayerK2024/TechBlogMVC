const BlogPosts = require('./BlogPosts');
const User = require('./Users');
const Comment = require('./Comment');

User.hasMany(BlogPosts, {
	foreignKey: 'createrId',
	onDelete: 'CASCADE'
});

BlogPosts.belongsTo(Users, {
	foreignKey: 'createrId',
});

BlogPosts.hasMany(Comment, {
	foreignKey: 'createrId',
});

Comment.belongsTo(Post,{
	foreignKey: 'creatorId',
})
module.exports = { BlogPosts, Users, Comment };
