import express from 'express';
import controller from './controller';

const router = express.Router();

/* GET users listing. */
router.post('/', controller.auth);

export default router;
