const { BlogPost } = require('../models');

exports.getDashboard = async (req, res) => {
  try {
    if (!req.session.user_id) {
      return res.redirect('/login');
    }
    const userPosts = await Post.findAll({
      where: { user_id: req.session.user_id },
    });
    res.render('dashboard', { userPosts });
  } catch (err) {
    res.status(500).json(err);
  }
};
