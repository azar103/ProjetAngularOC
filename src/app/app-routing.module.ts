import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from  './services/auth-guard.service';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { AuthComponent } from './auth/auth.component'
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component'
import { NgModule } from '@angular/core';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component'
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import { UserListComponent } from './user-list/user-list.component';
import { NewUserComponent } from './new-user/new-user.component';

const routes: Routes = [
  {path: 'appareils', canActivate: [AuthGuard] , component: AppareilViewComponent},
  {path: 'appareils/:id', canActivate: [AuthGuard]  , component: SingleAppareilComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'edit', canActivate: [AuthGuard], component: EditAppareilComponent},
  {path: 'users', component: UserListComponent},
  {path: 'new-user', component: NewUserComponent},
  {path: '', component: AppareilViewComponent},
  {path: 'not-found', component: FourOhFourComponent},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
