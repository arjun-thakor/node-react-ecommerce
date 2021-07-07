const express = require("express");
const UserController = require('../controllers/UserController');

const router = express.Router();

router.get('/users', UserController.getAllUsers);
router.post('/users', UserController.createUser);
router.get('/users/:id', UserController.getSingleUser);

module.exports = router;