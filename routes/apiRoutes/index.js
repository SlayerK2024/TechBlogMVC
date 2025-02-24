const router = require('express').Router();

const userRoutes = require('./userRoutes');
const blogRoutes = require('./blogRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/user', userRoutes);
router.use('/blog', blogRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
