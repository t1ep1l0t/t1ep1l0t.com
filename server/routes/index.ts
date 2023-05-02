const Router = require('express')
const auth_router = require('./auth_router.ts')


const router = Router();

router.use('/auth', auth_router);

module.exports = router
