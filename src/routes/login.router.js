const express = require('express');

const router = express.Router();

const authController = require('../controllers/auth.controller');
const middlewares = require('../middlewares/login');

router.post('/', middlewares.authMiddleware, authController.auth);

module.exports = router;