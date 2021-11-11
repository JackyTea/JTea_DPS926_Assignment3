import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'manager-page',
    loadChildren: () => import('./manager-page/manager-page.module').then( m => m.ManagerPagePageModule)
  },
  {
    path: 'add-new-product-page',
    loadChildren: () => import('./add-new-product-page/add-new-product-page.module').then( m => m.AddNewProductPagePageModule)
  },
  {
    path: 'history-page',
    loadChildren: () => import('./history-page/history-page.module').then( m => m.HistoryPagePageModule)
  },
  {
    path: 'restock-page',
    loadChildren: () => import('./restock-page/restock-page.module').then( m => m.RestockPagePageModule)
  },
  {
    path: 'history-detail-page/:id',
    loadChildren: () => import('./history-detail-page/history-detail-page.module').then( m => m.HistoryDetailPagePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
