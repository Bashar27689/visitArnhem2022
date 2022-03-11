import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HotelsComponent } from './hotels/hotels.component';
import { MilestonesComponent } from './milestones/milestones.component';
import { MuseumsComponent } from './museums/museums.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
  { path: '', redirectTo: '/Visitarnhem', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'milestones', component: MilestonesComponent },
  { path: 'museums', component: MuseumsComponent },
  { path : 'restaurants',component:RestaurantsComponent},
  {path:'hotels',component: HotelsComponent},
  {path:'contactus',component:ContactusComponent}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
