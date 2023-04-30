const jwt = require('jsonwebtoken');
class TokenService {
    create_access_token (user) {
        return jwt.sign(user, process.env.ACCESS_TOKEN_SK);
    }
    create_refresh_token (user) {
        return jwt.sign(user, process.env.REFRESH_TOKEN_SK);
    }
    check_access_token (access_token) {
        return jwt.verify(access_token, process.env.ACCESS_TOKEN_SK);
    }
    check_refresh_token (refresh_token) {
        return jwt.verify(refresh_token, process.env.REFRESH_TOKEN_SK);
    }
}
module.exports = new TokenService();