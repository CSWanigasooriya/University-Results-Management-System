import { HomeModule } from './modules/home/home.module';
import { ErrorpageComponent } from './shared/errorpage/errorpage.component';
import { HomeComponent } from './modules/home/home.component';
import { LoginComponent } from './modules/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { canActivate, hasCustomClaim, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';

const adminOnly = () => hasCustomClaim('admin');
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/login']);
const redirectLoggedInToAdmin = () => redirectLoggedInTo(['/admin']);
const belongsToAccount = (next) => hasCustomClaim(`account-${next.params.id}`);

const routes: Routes = [
  {
    path: 'login', component: LoginComponent,
    ...canActivate(redirectLoggedInToAdmin)
  },
  {
    path: 'admin', component: HomeComponent,
    loadChildren: () => HomeModule,
    ...canActivate(redirectUnauthorizedToLogin)
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: ErrorpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
