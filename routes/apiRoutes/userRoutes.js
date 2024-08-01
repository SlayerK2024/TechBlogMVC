// routes/apiRoutes/userRoutes.js
const express = require('express');
const userController = require('../../controllers/userController');
const { withAuth } = require('../../utils/Auth');

const router = express.Router();

// Define routes
router.route('/')
  .post(userController.add)
  .get(withAuth, userController.me);

router.post('/signup', userController.signup);
router.route('/login').post(userController.login);
router.route('/logout').get(userController.logout);

module.exports = router;
