import express from 'express';

import UserRoutes from './controllers/user';
import AuthRoutes from './controllers/auth';

const routes = express.Router();
routes.use('/user', UserRoutes);
routes.use('/auth', AuthRoutes);

module.exports = routes;
