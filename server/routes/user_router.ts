const UserController = require('../controllers/UserController.ts');

const Router = require('express');

const user_router = new Router();

user_router.post('/registration', UserController.registration_user);

module.exports = user_router;