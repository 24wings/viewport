import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ApiService } from './api.service';
import { Model } from '../model';
import { ActionType } from '../enum';



export interface IAction {
  type?: ActionType;
  query?: Object;
  skip?: number;
  limit?: number;
  sort?: Object;
  model?: string;
  populate?: string;
  newObject?: Object;
  keyword?: string;
  keys?: string[];
}




@Injectable()
export class DbService {
  private buildModel<T>(modelName: string): Model<T> {
    let model = new Model<T>(modelName);
    model['http'] = this.http;
    model['api'] = this.api;
    return model;
  }
  private IP = 'http://localhost';
 



  constructor(private http: Http, public api: ApiService) { }

}
