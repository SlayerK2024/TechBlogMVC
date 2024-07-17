const { Comment } = require('../models');

exports.createComment = async (req, res) => {
  try {
    const { content } = req.body;
    await Comment.create({
      content,
      post_id: req.params.id,
      user_id: req.session.user_id,
    });
    res.redirect(`/post/${req.params.id}`);
  } catch (err) {
    res.status(500).json(err);
  }
};
