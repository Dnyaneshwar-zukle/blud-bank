const express = require('express');
const { testConteoller } = require('../controllers/testColtrollers');

//router object
const router = express.Router();

//rout
router.get('/', testConteoller); 

//export 
module.exports = router;