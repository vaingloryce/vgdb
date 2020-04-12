var express = require('express');
var router = express.Router();

router.get('/', (_, res) => res.send({ description: 'VGDB API', online: true }).status(200))

module.exports = router;