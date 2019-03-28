
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const AddressSchema = new Schema({
  firstName: {
    type: String,
    required: 'Enter first name'
  },
  
  lastName: {
    type: String,
    required: 'Enter second name'
  },
  
  streetName: {
    type: String,
    required: 'Enter street name'
  },
  
  homeNumber: {
    type: Number,
    required: 'ENter home number'
  },
  
  aptNumber: {
    type: Number,
    required: 'Enter apartment number'
  },
  
  telNumber: {
    type: Number
  },
  
  createDate: {
    type: Date,
    default: Date.now
  }
  
  
});
