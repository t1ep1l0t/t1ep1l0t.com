const AuthController = require('../controllers/AuthController.ts');

const Router = require('express');

const auth_router = new Router();

auth_router.post('/register', AuthController.registration_user);
auth_router.post('/login', AuthController.login_user);
auth_router.get('/logout/:id', AuthController.logout_user);
auth_router.delete('/delete/:id', AuthController.delete_user);
auth_router.get('/check-token', AuthController.check_access_token);
auth_router.put('/update-tokens', AuthController.check_refresh_token);

module.exports = auth_router;