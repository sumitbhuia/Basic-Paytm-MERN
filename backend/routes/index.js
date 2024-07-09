const express = require('express');
const userRouter = require('./user')
const accountRouter = require('./account')
const router = express.Router();

//   /api/v1 -------------> api/v1/user -----------> api/v1/user/sigin
//   (backend/index.js)     (here)               (backend/routes/user.js)
                  

// In the parent file index.js  the main route is present '/api/v1'  , hiting the endpoint will run the router logic of this file 
//  If you hit the endpoint '/user' the logic in userRouter will run.
// Inside which you will find sub-route logic like /signin  i.e. (/user/signin)


router.use('/user',userRouter);
router.use('/account',accountRouter);


module.exports = router;