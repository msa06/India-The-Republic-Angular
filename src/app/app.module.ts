import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule,Routes } from "@angular/router";
//Components Imports
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { NregionComponent } from './components/nregion/nregion.component';
import { RiversComponent } from './components/rivers/rivers.component';
import { PlantComponent } from './components/plant/plant.component';
import { NresourcesComponent } from './components/nresources/nresources.component';
import { ClimateComponent } from './components/climate/climate.component';
import { EnvironmentalComponent } from './components/environmental/environmental.component';
import { LiteratureComponent } from './components/literature/literature.component';
import { ArtsComponent } from './components/arts/arts.component';
import { MusicComponent } from './components/music/music.component';
import { TheaterComponent } from './components/theater/theater.component';
import { LibrariesComponent } from './components/libraries/libraries.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

//app Routes Declaration
const appRoutes:Routes = [
  { path:'', component:IntroductionComponent },
  { path:'nregion', component:NregionComponent },
  { path:'rivers', component:RiversComponent },
  { path:'plant', component:PlantComponent },
  { path:'nresources', component:NresourcesComponent },
  { path:'climate', component:ClimateComponent },
  { path:'environment', component:EnvironmentalComponent },
  { path:'literature', component:LiteratureComponent },
  { path:'arts', component:ArtsComponent },
  { path:'music', component:MusicComponent },
  { path:'theater', component:TheaterComponent },
  { path:'libraries', component:LibrariesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IntroductionComponent,
    NregionComponent,
    RiversComponent,
    PlantComponent,
    NresourcesComponent,
    ClimateComponent,
    EnvironmentalComponent,
    LiteratureComponent,
    ArtsComponent,
    MusicComponent,
    TheaterComponent,
    LibrariesComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
