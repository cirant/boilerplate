import { config } from 'dotenv';

const jwt = require('express-jwt');

config();

const secret = process.env.SECRET || 'secret';
const autenticate = jwt({ secret });

export default {
  autenticate,
};
