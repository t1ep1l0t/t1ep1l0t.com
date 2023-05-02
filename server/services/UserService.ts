const UserModel = require('../models/UserModel.ts');
const TokenService = require('./TokenService.ts');
const RoleModel = require('../models/RoleModel.ts');
const bcrypt = require('bcrypt');

class UserService {
    async registration_user ({mail, username, password }) {
        const check_email = await UserModel.findOne({mail: mail});
        if (check_email) {
            return {
                status: 400,
                message: `User with email: ${mail}, already registered, please login!`
            }
        }

        const check_username = await UserModel.findOne({username: username});
        if (check_username) {
            return {
                status: 400,
                message: `User with username: ${username}, already registered, please login!`
            }
        }

        const user_role = await RoleModel.findOne({value: 'USER'});

        const user_for_create_tokens = {mail, username, user_role};

        const refresh_token = TokenService.create_refresh_token(user_for_create_tokens);

        const hash_password = bcrypt.hashSync(password, 5);

        await UserModel.create({
            mail,
            username,
            password: hash_password,
            role: [user_role.value],
            refresh_token
        });

        return {
            status: 200,
            message: 'User successfully created!'
        }
    }
    async login_user ({ mail, password }) {
        const find_user = await UserModel.findOne({mail: mail});

        if (!find_user) {
            return {
                status: 400,
                message: `User ${mail}, not registered, please register!`
            }
        }

        const verify_password = bcrypt.compareSync(password, find_user.password);
        if(!verify_password) {
            return {
                status: 400,
                message: `Password for ${mail} wrong, please retry!`
            }
        }

        const user_for_create_tokens = {
            mail: find_user.mail,
            username: find_user.username,
            user_role: find_user.role[0]
        };

        const refresh_token = TokenService.create_refresh_token(user_for_create_tokens);
        const access_token = TokenService.create_access_token(user_for_create_tokens);

        find_user.refresh_token = refresh_token;

        await find_user.save();

        return {
            status: 200,
            message: `Successfully login! Welcome back ${find_user.username}!`,
            find_user,
            access_token
        }
    }
    async logout_user (id) {
        const find_user = await UserModel.findOne({_id: id});

        if(!find_user) {
            return {
                status: 401,
                message: `User with id: ${id}, not found.`
            }
        }

        find_user.refresh_token = null;

        await find_user.save();

        return {
            status: 200,
            message: `Successfully deleted refresh token from database! Logout!`
        }
    }
    async delete_user (id) {
        const deleted_user = await UserModel.findByIdAndDelete(id);

        if(!deleted_user) {
            return {
                status: 401,
                message: `User with id: ${id}, not found.`
            }
        }
        return {
            status: 200,
            message: `User successfully deleted.`
        }
    }
    async check_access_token (token) {
        try {
            if(!token) {
                return {
                    status: 401,
                    message: 'Please authenticate.'
                }
            }

            const check_token = TokenService.check_access_token(token);

            const user = await UserModel.findOne({mail: check_token.mail});

            return {
                status: 200,
                message: 'Token valid.',
                user
            }
        } catch (e) {
            return {
                status: 401,
                message: e
            }
        }
    }
    async check_refresh_token (token) {
        try {
            if(!token) {
                return {
                    status: 401,
                    message: 'Please authenticate.'
                }
            }

            const check_token = TokenService.check_refresh_token(token);

            const user = await UserModel.findOne({mail: check_token.mail});

            const user_for_create_tokens = {
                mail: user.mail,
                username: user.username,
                user_role: user.role[0]
            };

            const refresh_token = TokenService.create_refresh_token(user_for_create_tokens);
            const access_token = TokenService.create_access_token(user_for_create_tokens);

            user.refresh_token = refresh_token;

            await user.save();

            return {
                status: 200,
                message: 'Update tokens.',
                user,
                access_token
            }
        } catch (e) {
            return {
                status: 401,
                message: e
            }
        }
    }
}

module.exports = new UserService();