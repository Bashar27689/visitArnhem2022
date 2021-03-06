import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HotelsComponent } from './hotels/hotels.component';
import { MilestonesComponent } from './milestones/milestones.component';
import { MuseumsComponent } from './museums/museums.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { FooterComponent } from './footer/footer.component';
import { NavShellComponent } from './nav-shell/nav-shell.component';

@NgModule({
  declarations: [										
    AppComponent,
      NavbarComponent,
      ContactusComponent,
      ContactusComponent,
      HotelsComponent,
      MilestonesComponent,
      MuseumsComponent,
      RestaurantsComponent,
      FooterComponent,
      NavShellComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
