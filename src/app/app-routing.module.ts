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
