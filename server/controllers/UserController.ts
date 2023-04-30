const UserModel = require('../models/UserModel.ts');
const TokenService = require('../services/TokenService.ts');
const RoleModel = require('../models/RoleModel.ts');
const bcrypt = require('bcrypt')
class UserController {
    async registration_user (req, res) {
        try {
            const {mail, username, password } = req.body;

            const check_email = await UserModel.findOne({mail: mail});
            if (check_email) {
                return res.status(401).json({
                    message: `User with email: ${mail}, already registered, please login!`
                })
            }

            const check_username = await UserModel.findOne({username: username});
            if (check_username) {
                return res.status(401).json({
                    message: `User with username: ${username}, already registered, please login!`
                })
            }

            const user_role = await RoleModel.findOne({value: 'USER'});

            const user_for_create_tokens = {mail, username, user_role};

            const refresh_token = TokenService.create_refresh_token(user_for_create_tokens);

            const hash_password = bcrypt.hashSync(password, 5);

            const created_user = await UserModel.create({
                mail,
                username,
                password: hash_password,
                role: [user_role.value],
                refresh_token
            });

            console.log(created_user);

            res.status(200).json({
                message: 'User successfully created!'
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

            const find_user = await UserModel.findOne({mail: mail});
            if (!find_user) {
                return res.status(400).json({
                    message: `User with e-mail ${mail}, not registered, please register!`
                })
            }

            const verify_password = bcrypt.compareSync(password, find_user.password);
            if(!verify_password) {
                return res.status(401).json({
                    message: `Password for ${mail} wrong, please retry!`
                })
            }

            const user_for_create_tokens = {
                mail: find_user.mail,
                username: find_user.username,
                user_role: find_user.role[0]
            };

            const refresh_token = TokenService.create_refresh_token(user_for_create_tokens);
            const access_token = TokenService.create_access_token(user_for_create_tokens);

        } catch (e) {
            console.log(e);
            res.status(500).json({
                message: 'Some server error!'
            })
        }
    }
    logout_user (req, res) {

    }
    delete_user (req, res) {

    }
}
module.exports = new UserController();