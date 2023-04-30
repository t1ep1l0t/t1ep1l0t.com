const Router = require('express')
const user_router = require('./user_router.ts')


const router = Router();

router.use('/auth', user_router);

module.exports = router
