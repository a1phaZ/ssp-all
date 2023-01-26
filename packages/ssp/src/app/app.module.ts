import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CoreComponentsAngularModule } from '@ssp-ui/core-components-angular';
import { defineCustomElements} from '@ssp-ui/core-components/loader';
import {NxWelcomeComponent} from './nx-welcome.component';

defineCustomElements();

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, CoreComponentsAngularModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
