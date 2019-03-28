
import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose"; 
import { Routes } from "./routes/routes";


class App {
  public app: express.Application;
  public routeAddress: Routes = new Routes();
  public mongoUrl: string = "mongodb:127.0.0.1:27017/addressdb";
  
  constructor() {
  }
  
  private config(): void {    
    this.app.use(bodyParser.json()); 
    this.app.use(bodyParser.urlencoded({ extended: false}));

  }
  
  private mongosetup(): void {
    mongoose.connect(this.mongoUrl);
    mongoose.Promise = global.Promise;
  }
  
}

export default new App().app;
