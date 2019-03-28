
import * as mongoose from 'mongoose';
import { AddressSchema } from '../models/addressModel';
import { Request, Response } from 'express';

const Address = mongoose.model('Address', AddressSchema); //Why out of class AddressController

export class AddressController {

  public addNewAddress(req: Request, res: Response) {
    let newAddress = new Address(req.body);
    
    addNewAddress.save((err, address)=>{
      if(err){
        res.send(err);
      }
      res.json(address);
    });    
  
  }
  
  public getAllAddresses(req: Request, res: Response) {
    Address.find({}, (err, addressList)=> {
      if(err) {
        res.send(err);
      }
      res.json(addressList);
    });  
  }
  
  public getAddressById(req: Request, res: Response) {
    Address.findOne(req.params.addressId, (err, address)=> { 
      if(err) {
        res.send(err);
      }
      res.json(address)
    });  
  }
  
  public updateAddress(req: Request, res: Response) {
    Address.findOneAndUpdate({_id: req.params.addressId}, (err, address)=> {
      if(err) {
        res.send(err);
      }
      res.json(address);
    });
  
  }
  
  public deleteAddressById(req: Request, res: Response) {
    Address.remove({_id: req.params.addressId}, (err, address)=> {
      if(err) {
        res.send(err);
      }
      res.json(address);
    });
  
  }  
}
