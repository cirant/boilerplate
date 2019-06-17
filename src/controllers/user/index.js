import express from 'express';
import controller from './controller';

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.send('retur all users');
});

router.post('/', controller.create);

export default router;
