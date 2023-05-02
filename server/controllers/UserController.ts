const UserService = require('../services/UserService.ts');
class UserController {
    async registration_user (req, res) {
        try {
            const {mail, username, password } = req.body;

            const {status, message} = await UserService.registration_user({mail, username, password });

            res.status(status).json({
                message: message
            })

        } catch (e) {
            console.log(e);
            res.status(500).json({
                message: 'Some server error'
            })
        }
    }
    async login_user (req, res) {
        try {
            const { mail, password } = req.body;

            const {status, message, find_user, access_token} =  await UserService.login_user({ mail, password });

            if(!find_user) {
                 return  res.status(status).json({
                     message: message
                 });
            }
            return  res.status(status).json({
                message: message,
                find_user,
                access_token
            });

        } catch (e) {
            console.log(e);
            res.status(500).json({
                message: 'Some server error!'
            })
        }
    }
    async logout_user (req, res) {
        try {
            const id = req.params.id;

            const logout_user = await UserService.logout_user(id);

            res.status(logout_user.status).json({
                message: logout_user.message
            });

        } catch (e) {
            console.log(e);
            res.status(500).json({
                message: 'Some server error!'
            });
        }
    }
    async delete_user (req, res) {
        try {
            const id = req.params.id;

            const deleted_user = await UserService.delete_user(id);

            res.status(deleted_user.status).json({
                message: deleted_user.message
            })

        } catch (e) {
            console.log(e);
            res.status(500).json({
                message: 'Some server error!'
            });
        }
    }
    async check_access_token (req, res) {
        try {
            const token = req.headers.authorization?.split(' ')[1];

            const result = await UserService.check_access_token(token);

            res.status(result.status).json({
                message: result.message,
                user: result.user ? result.user : null
            })

        }catch (e) {
            console.log(e);
            res.status(500).json({
                message: 'Some server error!'
            });
        }
    }
    async check_refresh_token (req, res) {
        try {
            const token = req.headers.authorization?.split(' ')[1];

            const result = await UserService.check_refresh_token(token);

            res.status(result.status).json({
                message: result.message,
                user: result.user ? result.user : null,
                access_token: result.access_token ? result.access_token : null
            })

        }catch (e) {
            console.log(e);
            res.status(500).json({
                message: 'Some server error!'
            });
        }
    }
}
module.exports = new UserController();