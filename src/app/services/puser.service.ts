import { Injectable } from '@angular/core';
import { UserInterface } from '../models/user.model';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PuserService {

private user$ = new BehaviorSubject<UserInterface>({
  email:"",
  password:"",
  userName:"",
  userLastname: "",
  adress:""
});

constructor() {}

selectedUser$ = this.user$.asObservable();


setUser(user: UserInterface) {
  this.user$.next(user);
}

}

// @Injectable()export class ProductService {
//   private product$ = new BehaviorSubject<any>({});
//   selectedProduct$ = this.product$.asObservable();

//   setProduct(product: any) {
//     this.product$.next(product);
//   }


