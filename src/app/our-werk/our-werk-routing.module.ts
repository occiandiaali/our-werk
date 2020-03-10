import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurWerkPage } from './our-werk.page';

const routes: Routes = [
  {
    path: 'our-werk',
    component: OurWerkPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'categories',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../categories/categories.module').then(m => m.CategoriesPageModule)
          }
        ]
      },
      {
        path: 'messages',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../messages/messages.module').then(m => m.MessagesPageModule)
          }
        ]
      },
      {
        path: 'favourites',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../favourites/favourites.module').then(m => m.FavouritesPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/our-werk/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/our-werk/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurWerkPageRoutingModule {}
