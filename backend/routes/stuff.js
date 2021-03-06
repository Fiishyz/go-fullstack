const express = require('express');
const router = express.Router();
const stuffCtrl = require('../controllers/stuff');
const auth = require('../middleware/auth');

router.post('/',auth, stuffCtrl.createThing);
router.put('/:id',auth, stuffCtrl.modifyThing);
router.get('/:id',auth, stuffCtrl.getOneThing);
router.get('/',auth, stuffCtrl.getAllStuff);
router.delete('/:id',auth, stuffCtrl.deleteThing);
 
module.exports = router;