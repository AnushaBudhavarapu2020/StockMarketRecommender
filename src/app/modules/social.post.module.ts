import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

import { SocialMediaCountComponent } from '../component/social-media-count.component';
import { SocialMediaCountService } from '../services/socialMediaCountService';

import { Store } from '../store/store';
import socialMediaCountReducer from '../store/reducers/socialMediaCountReducer';
import filterSettingsReducer from '../store/reducers/filterSettingsReducer';
import { FilterSettings } from '../model/filterSettings';

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [
    SocialMediaCountComponent
  ],
  providers: [
     {provide: 'FilterSettingsStore', useFactory:()=>(new Store<FilterSettings>(filterSettingsReducer, null))},
     {provide: 'SocialMediaCountStore', useFactory:()=>(new Store<number>(socialMediaCountReducer, 0))},
     {provide: 'SocialMediaCountService', useClass: SocialMediaCountService}
     ],
     exports: [SocialMediaCountComponent]
})
export class SocialPostModule { }
