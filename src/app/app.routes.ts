import { Routes } from '@angular/router';
import { CreateAccountComponent } from './pages/auth/create-account/create-account.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { ForgotPasswordComponent } from './pages/auth/forgot-password/forgot-password.component';
import { LandingComponent } from './pages/landing/landing.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'not-found', component: NotFoundComponent },

  { path: '', component: LandingComponent },
];
