const UserController = require('../controllers/UserController.ts');

const Router = require('express');

const user_router = new Router();

user_router.post('/register', UserController.registration_user);
user_router.post('/login', UserController.login_user);
user_router.get('/logout/:id', UserController.logout_user);
user_router.delete('/delete/:id', UserController.delete_user);

module.exports = user_router;