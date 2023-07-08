import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './services/auth-guard.guard';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DetailComponent } from './pages/detail/detail.component';
import { ContactComponent } from './pages/contact/contact.component';
const routes: Routes = [


  { path: 'register', canActivate: [AuthGuard], component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {path: '', component: HomeComponent},
  {path: 'products', canActivate:[AuthGuard], component: ProductsComponent},
  {path: 'products/:id', canActivate:[AuthGuard], component: DetailComponent},
  {path: 'contact', component: ContactComponent},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
