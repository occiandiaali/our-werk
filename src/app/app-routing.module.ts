import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./our-werk/our-werk.module').then(m => m.OurWerkPageModule)
  },
  {
    path: 'message-settings',
    loadChildren: () => import('./message-settings/message-settings.module').then( m => m.MessageSettingsPageModule)
  },
  {
    path: 'new-message',
    loadChildren: () => import('./new-message/new-message.module').then( m => m.NewMessagePageModule)
  },
  {
    path: 'category-detail',
    loadChildren: () => import('./category-detail/category-detail.module').then( m => m.CategoryDetailPageModule)
  },
  {
    path: 'worker-detail',
    loadChildren: () => import('./worker-detail/worker-detail.module').then( m => m.WorkerDetailPageModule)
  }
  // {
  //   path: 'tab3',
  //   loadChildren: () => import('./tab3/tab3.module').then(m => m.Tab3PageModule)
  // }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
