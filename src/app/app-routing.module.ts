import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './company-protal/dashboard/dashboard.component';
import { AdminLayoutComponent } from './layout/admin/admin-layout.component';
import { LoginComponent } from './layout/auth/login/login.component';
import { LayoutModule } from './layout/layout.module';
import { AuthGuard } from './shared/guard/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [{ path: '', redirectTo: '/admin/dashboard', pathMatch: 'full' },
    { path: 'admin', loadChildren: () => import('./company-protal/dashboard/dashboard.module').then(m => m.DashboardModule) },

    ]
  },
  {
    path: 'login',
    component: LoginComponent,
    loadChildren: () =>
      import('./layout/auth/login/login.module').then(m => m.LoginModule)
  },

  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [LayoutModule,RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
