import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import {CoreComponentsAngularModule} from '@ssp-ui/core-components-angular';

@NgModule({
	imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule, CoreComponentsAngularModule],
  declarations: [HomePage],
})
export class HomePageModule {}
