import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

let some_condition = true;
if (some_condition){
  let redirect = 'login';
} else {
  let redirect = 'home';
}

const routes: Routes = [
  {
    path: '',
    //redirectTo: redirect,
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'membership', loadChildren: './membership/membership.module#MembershipPageModule' },
  { path: 'werte', loadChildren: './werte/werte.module#WertePageModule' },
  { path: 'statistic', loadChildren: './statistic/statistic.module#StatisticPageModule' },
  { path: 'game', loadChildren: './game/game.module#GamePageModule' },
  { path: 'result', loadChildren: './result/result.module#ResultPageModule' },
  { path: 'contactpage', loadChildren: './contactpage/contactpage.module#ContactpagePageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
