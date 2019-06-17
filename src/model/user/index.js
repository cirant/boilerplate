import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

import schema from './schema';
// add hooks here
schema.pre('save', function save() {
  this.password = bcrypt.hashSync(this.password, 10);
});

const User = mongoose.model('User', schema);

module.exports = User;
