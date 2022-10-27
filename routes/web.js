import express from 'express';
 
import Ac2tController from '../controllers/ac2tController.js';
import ProdController from '../controllers/prodController.js';
import ProdGetController from '../controllers/prodgetController.js';
import ProdIdController from '../controllers/prodidController.js';
import UpdateJobController from '../controllers/updateJobController.js';
import ProdModel from '../models/prod.js';
import IdController from '../controllers/idController.js';

const router = express.Router();


router.post('/ac2t', Ac2tController.createDoc);
router.post('/prod',ProdController.createDoc);
router.get('/get',ProdGetController.getAllDoc);
router.get('/get/:id',ProdIdController.getAllDoc);
router.put('/get/:id',UpdateJobController.getAllDoc);
router.get('/joblink/:id',IdController.getAllDoc);









export default router