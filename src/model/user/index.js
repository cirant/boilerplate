import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { config } from 'dotenv';
import * as jwt from 'jsonwebtoken';
import schema from './schema';

const createError = require('http-errors');

config();

// add hooks here
schema.pre('save', function save() {
  this.password = bcrypt.hashSync(this.password, 10);
});

schema.method({
  verifyPassword(password, res, callback) {
    try {
      bcrypt.compare(password, this.password, (err, isMatch) => {
        if (isMatch) {
          const secret = process.env.SECRET || 'secret';
          const token = jwt.sign({ exp: Math.floor(Date.now() / 1000) + (60 * 60) }, secret);
          res.status(200).json({ text: token });
        } else {
          callback(createError(400));
        }
      });
    } catch (e) {
      callback(e);
    }
  },
});

const User = mongoose.model('User', schema);

module.exports = User;
