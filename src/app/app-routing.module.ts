import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'message-settings',
    loadChildren: () => import('./message-settings/message-settings.module').then( m => m.MessageSettingsPageModule)
  },
  {
    path: 'new-message',
    loadChildren: () => import('./new-message/new-message.module').then( m => m.NewMessagePageModule)
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
