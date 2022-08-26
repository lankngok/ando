import { ProductService } from './../../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  list: any;
  listCate:any
  constructor(private ProductService : ProductService) { }

  ngOnInit(): void {
    this.getAllPro();
    this.gettALLCate();
  }
 getAllPro():void{
  this.ProductService.getAll().subscribe((data) => {
    this.list = data;
  })
}
  gettALLCate():void{
    this.ProductService.getCate().subscribe((data)=>{
      this.listCate=data
    })
  }
}
  // filter_pro(id:any){
  //   this.ProductService.filter_pro(id).subscribe((data)=>{
  //     this.list = data
  //   })
  // }
