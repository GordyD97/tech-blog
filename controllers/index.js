const router = require('express').Router();
// const userRoutes = require('./user-routes');
const user = require('./api/user')

router.use('/user', user);
// router.use('/newuser', newUser);

module.exports = router;

// check line 3 to see if is correct auto update for route ???
