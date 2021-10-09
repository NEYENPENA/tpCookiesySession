var express = require('express');
var router = express.Router();
const {index, processIndex, user, destroy} = require('../controllers/idexcontroller');
const validate = require('../middlewar/validate');

/* GET home page. */
router.get('/', index);
router.post('/',validate, processIndex);

router.get('/user', user);

router.get('/destroy', destroy);

module.exports = router;
