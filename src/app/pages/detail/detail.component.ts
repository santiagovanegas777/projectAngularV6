import { RequestService } from './../../services/request.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductApiInterface } from 'src/app/models/products.models';
import { PuserService } from 'src/app/services/puser.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements  OnInit {

  // shoeList: ProducApiInterface[]=[];
  shoeItem!: ProductApiInterface;
  nombre = "";

  constructor(private ruta:ActivatedRoute, private requestService:RequestService, private PuserService: PuserService) {

  }

  ngOnInit() {
    this.ruta.params.subscribe(params=>{
      console.log(params['id']);
      this.getProductsDetail(params['id']);
    });

    this.PuserService.selectedUser$.subscribe(user=>{
      this.nombre=user.userName;
    });
  }

  private getProductsDetail(id:string){
    this.requestService.getApiProductsDetail(id).subscribe((product: ProductApiInterface[]) => {
      console.log(product)
      this.shoeItem=product[0];
      console.log(this.shoeItem);
    })
  }
}
