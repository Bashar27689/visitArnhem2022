import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HotelsComponent } from './hotels/hotels.component';
import { MilestonesComponent } from './milestones/milestones.component';
import { MuseumsComponent } from './museums/museums.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { ContactusComponent } from './contactus/contactus.component';
import { NavShellComponent } from './nav-shell/nav-shell.component';

const navbarRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'home',component:HomeComponent},
  { path: 'milestones', component: MilestonesComponent },
  { path: 'museums', component: MuseumsComponent },
  { path : 'restaurants',component:RestaurantsComponent},
  {path:'hotels',component: HotelsComponent},
  {path:'contactus',component:ContactusComponent}
 

];
const routes: Routes = [
  { path: '', component: NavShellComponent, children: navbarRoutes },
  { path: 'home', component:HomeComponent },
  

  

  // { path: '**', component: PageNotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
