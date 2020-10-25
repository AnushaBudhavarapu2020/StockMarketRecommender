import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { SocialPostModule } from './social.post.module';

import { MockSocialMediaService } from '../services/mockSocialMediaService';
import { StockComponent } from '../component/stock.component';
import { StockPricesComponent } from '../component/stock.prices.component';
import { StockSymbolService } from '../services/stockSymbolService';

import { FilterSettings } from '../model/filterSettings';
import { StockModel } from '../model/stockModel';
import { Store } from '../store/store';
import stockSymbolsReducer from '../store/reducers/StockSymbolsReducer';
import filterSettingsReducer from '../store/reducers/filterSettingsReducer';

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SocialPostModule
  ],
  declarations: [
    StockComponent,
    StockPricesComponent
  ],
  providers: [
    {provide: 'StockSymbolService', useClass: StockSymbolService},
    {provide: 'StockSymbolStore', useFactory:()=>(new Store<Array<StockModel>>(stockSymbolsReducer, null))},
    {provide: 'FilterSettingsStore', useFactory:()=>(new Store<FilterSettings>(filterSettingsReducer, null))},
    {provide: 'SocialMediaService', useClass: MockSocialMediaService}
     ],
     exports: [
        StockComponent,
        StockPricesComponent
     ]
})
export class StockModule { }
