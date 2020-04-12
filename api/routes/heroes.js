var express = require('express');
var router = express.Router();

/* GET heroes default listing. */
router.get('/', (_, res) => res.send([{ id: 1, name: 'Adagio' }]).status(200)) //mockup for testing purposes.

module.exports = router;
