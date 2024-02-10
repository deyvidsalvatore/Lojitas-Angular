import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { SuccessComponent } from './pages/success/success.component';
import { CancelComponent } from './pages/cancel/cancel.component';

export const routes: Routes = [
    { path: "", redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'cart', component: CartComponent},
    { path: 'success', component: SuccessComponent },
    { path: 'cancel', component: CancelComponent }
];
