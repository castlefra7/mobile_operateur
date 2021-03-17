
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'photo',
    loadChildren: () => import('./photo/photo.module').then(m => m.PhotoModule)
  }, 
  {
    path: 'mobile-money',
    loadChildren: () => import("./mobile-money/mobile-money.module").then(m => m.MobileMoneyModule)
  },
  {
    path: 'appel',
    loadChildren: () => import('./appel/appel.module').then( m => m.AppelPageModule)
  },
  {
    path: 'message',
    loadChildren: () => import('./message/message.module').then( m => m.MessagePageModule)
  },
  {
    path: 'apps',
    loadChildren: () => import('./apps/apps.module').then( m => m.AppsPageModule)
  },
  {
    path: 'infoconso',
    loadChildren: () => import('./infoconso/infoconso.module').then( m => m.InfoconsoPageModule)
  }, {
    path: 'credit',
    loadChildren: () => import('./credit/credit.module').then(m => m.CreditModule)
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  providers: [
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
