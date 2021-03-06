import express from 'express';
import controller from './controller';
import authController from '../../middleware';

const router = express.Router();

/* GET users listing. */
router.get('/', authController.autenticate, controller.show);
router.post('/', controller.create);

export default router;
