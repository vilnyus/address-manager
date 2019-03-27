
import * as express from "express";
import * as mongoose from "mongoose";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/routes";


export class App {
  public app: Express.Application = express();
  public routeAddress: Route = new Route();
  public mongoUrl: string = "mongodb:127.0.0.1:27017/addressdb";
  
  constructor() {
  }
  
  private config(): void {
    this.app.use(bodyParser.urlencoded({ extended: false}));
    this.app.use(bodyParser.json());
  
  }
  
  private mongosetup(): void {
    mongoose.connect(this.mongoUrl);
    mongoose.Promise = global.Promise;
  }
  
}

export default App().app;
