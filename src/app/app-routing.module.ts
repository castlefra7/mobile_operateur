
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'photo',
    loadChildren: () => import('./photo/photo.module').then(m => m.PhotoModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'mobile-money',
    loadChildren: () => import("./mobile-money/mobile-money.module").then(m => m.MobileMoneyModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'appel',
    loadChildren: () => import('./appel/appel.module').then(m => m.AppelPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'message',
    loadChildren: () => import('./message/message.module').then(m => m.MessagePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'apps',
    loadChildren: () => import('./apps/apps.module').then(m => m.AppsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'offers',
    loadChildren: () => import('./offer/offer.module').then(m => m.OfferModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'infoconso',
    loadChildren: () => import('./infoconso/infoconso.module').then(m => m.InfoconsoPageModule),
    canActivate: [AuthGuard]
  }, {
    path: 'credit',
    loadChildren: () => import('./credit/credit.module').then(m => m.CreditModule),
    canActivate: [AuthGuard]
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthGuard
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
