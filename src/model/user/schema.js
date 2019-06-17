import { Schema } from 'mongoose';

const schema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    dropDups: true,
  },
  username: {
    type: String,
    unique: true,
    required: [true],
  },
  password: {
    type: String,
    required: [true],
  },
},
{
  timestamps: true,
});

module.exports = schema;
