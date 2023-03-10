import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { CoreComponentsAngularModule } from '@ssp-ui/core-components-angular';
import { defineCustomElements} from '@ssp-ui/core-components/loader';

defineCustomElements();

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    CoreComponentsAngularModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
