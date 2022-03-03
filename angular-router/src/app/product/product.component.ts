import { Component, OnInit } from '@angular/core';
import { ProductinformationService } from '../productinformation.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private pc: ProductinformationService) { }
d:any;
  ngOnInit() {
  this.pc.getData().subscribe((data)=>{
     this.d=data
  });
  
  }
  arr=[
    {
      "id":1,
      "name":"",
      "cost":"",
      "img":""
    }
  ]
  addtocart(p:any){
this.arr.push(p)
this.pc.productdata(p);
  }
 
}
