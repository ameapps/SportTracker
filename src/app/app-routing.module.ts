import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'menu/register-training',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'menu/register-training',
    loadChildren: () => import('./menu/register-training/register-training.module').then( m => m.RegisterTrainingModule)
  },
  {
    path: 'menu/gallery',
    loadChildren: () => import('./menu/gallery/gallery.module').then( m => m.GalleryModule)
  },
  {
    path: 'menu/report',
    loadChildren: () => import('./menu/report/report.module').then( m => m.ReportModule)
  },
  {
    path: 'menu/homepage',
    loadChildren: () => import('./menu/homepage/homepage.module').then( m => m.HomepageModule)
  }
];

// GalleryComponent ReportModule

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
