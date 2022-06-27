import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PastriesComponent } from './pastries/pastries.component';
import { PastrieDetailsComponent } from './pastrie-details/pastrie-details.component';
import { PatrieSearchComponent } from './patrie-search/patrie-search.component';
import { PastrieLoginComponent } from './pastrie-login/pastrie-login.component';
import { PastrieDescriptionComponent } from './pastrie-description/pastrie-description.component';
import { PastriePaginateComponent } from './pastrie-paginate/pastrie-paginate.component';
import { PastrieGameComponent } from './pastrie-game/pastrie-game.component';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';

@NgModule({
  declarations: [
    AppComponent,
    PastriesComponent,
    PastrieDetailsComponent,
    PatrieSearchComponent,
    PastrieLoginComponent,
    PastrieDescriptionComponent,
    PastriePaginateComponent,
    PastrieGameComponent,
    DashboardComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
