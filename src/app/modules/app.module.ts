import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { StockModule } from './stock.module';
import {DatePipe} from '@angular/common';

import { AppComponent } from '../component/app.component';
import { HeaderComponent } from '../component/header.component';
import { MockStockSymbolProvider } from '../providers/mockStockSymbolProvider';
import { MockStockPriceService } from '../services/mockStockPriceService';
import { MockAlgorithmDataService } from '../services/mockAlgorithmDataService';
import { MockSocialMediaCountProvider } from '../providers/mockSocialMediaCountProvider';
import { MockRecommendationProvider } from '../providers/mockRecommendationProvider';
import { RecommendationService } from '../services/recommendationService';

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StockModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  providers: [
     {provide: 'StockProvider', useClass: MockStockSymbolProvider},
     {provide: 'SocialMediaCountProvider', useClass: MockSocialMediaCountProvider},
     {provide: 'RecommendationProvider', useClass: MockRecommendationProvider},
     {provide: 'StockPriceService', useClass: MockStockPriceService},
     {provide: 'AlgorithmService', useClass: MockAlgorithmDataService},
     {provide: 'RecommendationService', useClass: RecommendationService},
     DatePipe
     ],
  bootstrap: [AppComponent]
})
export class AppModule { }
