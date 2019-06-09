import express from 'express';

import UserRoutes from './controllers/user';

const routes = express.Router();
routes.use('/user', UserRoutes);

module.exports = routes;
