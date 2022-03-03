import { Injectable } from '@angular/core';
import {HttpClient}   from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductinformationService {

  constructor(private pc:HttpClient) { }
  getData(){
    return this.pc.get('http://localhost:3000/food');
  }
  arr:any;
  productdata(p:any){
this.arr=p;
return this.arr;
  }
}
