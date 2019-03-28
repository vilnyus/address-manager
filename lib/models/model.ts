
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const AddressSchema = new Schema({
  firstName: {
    type: string,
    required: 'Enter first name'
  },
  
  lastName: {
    type: string,
    required: 'Enter second name'
  },
  
  streetName: {
    type: string,
    required: 'Enter street name'
  },
  
  homeNumber: {
    type: number,
    required: 'ENter home number'
  },
  
  aptNumber: {
    type: number,
    required: 'Enter apartment number'
  },
  
  telNumber: {
    type: number
  },
  
  createDate: {
    type: Date,
    default: Date.now
  }
  
  
});
