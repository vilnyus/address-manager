
import * as mongoose from 'mongoose';
import { AddressSchema } from '../models/model';
import { Request, Response } from 'express';

const Address = mongoose.model('Address', AddressSchema); //Why out of class AddressController

export class AddressController {

  public addNewAddress(req: Request, res: Response) {
    let newAddress = new Address(req.body);
    
    newAddress.save((err, address)=>{
      if(err){
        res.send(err);
      }
      res.json(address);
    });    
  
  }
  
  public getAllAddresses(req: Request, res: Response) {

    Address.find({}, function(err, addressList){
  
      if(err) {
        res.send(err);
      }
      res.json(addressList);
    });
  
  }
  
  public getAddressById(req: Request, res: Response) {

    Address.findById/*findOne*/(req.params.addressId, function(err, address){ 

      if(err) {
        res.send(err);
      }
      res.json(address)
    });  
  }
  
  public updateAddress(req: Request, res: Response) {
    Address.findOneAndUpdate({_id: req.params.addressId}, req.body, { new: true }, function(err, address) {
      if(err) {
        console.log(err);
        res.send(err);
      }
      console.log("success");
      res.json(address);
    });
  
  }
  
  public deleteAddressById(req: Request, res: Response) {
    console.log("in delete ", req.params);
    Address.deleteOne({_id: req.params.addressId}, function(err, address) {
      if(err) {
        res.send(err);
      }
      res.json({message: "Successfully deleted"});
    });
  
  }  
}
