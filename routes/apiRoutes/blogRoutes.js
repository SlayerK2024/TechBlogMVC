const blogController = require('../../controllers/blogController');
const commentController = require('../../controllers/commentController');
const { withAuth } = require('../../utils/Auth');

const router = require('express').Router();

router.route('/').post(withAuth, blogController.add);

router.get('/', blogController.getAllPosts);


router.get('/BlogPost/:id', blogController.getPostById);


router.post('/BlogPost', blogController.createPost);


router.post('/BlogPost/:id/comment', commentController.createComment);


router.delete('/BlogPost/:id', blogController.deletePost);


module.exports = router;
