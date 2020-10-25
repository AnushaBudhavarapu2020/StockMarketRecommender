import { Component, Inject } from '@angular/core';
import { StockModel } from '../model/stockModel';
import { DatePipe } from '@angular/common';
import { Store } from '../store/store';
import { FilterSettings } from '../model/filterSettings';
import { ISocialMediaService } from '../services/interface/socialMediaService';
import { SymbolsService } from '../services/interface/SymbolService';

@Component({
  selector: 'stock',
  templateUrl: '../html/stock.component.html',
  styleUrls: ['../css/stock.component.css']
})
export class StockComponent {
  public socialMediaList: Array<string> = [];
  public stockSymbolList: Array<StockModel> = [];
  private unSubscribe: any;

  constructor(@Inject('StockSymbolService') private stockSymbolService: SymbolsService,
              @Inject('StockSymbolStore') private stockModelsStore: Store<Array<StockModel>>,
              @Inject('FilterSettingsStore') private filterSettingsStore: Store<FilterSettings>,
              @Inject('SocialMediaService') private socialMediaService: ISocialMediaService,
              private datePipe: DatePipe) {
    this.unSubscribe = stockModelsStore.subscribe(() => {
      this.stockSymbolList = Object.keys(stockModelsStore.getState()).map(function (symbolIndex) {
        var symbol = stockModelsStore.getState()[symbolIndex];
        return symbol;
      });
    });
    stockSymbolService.getAllStockSymbol();
    this.socialMediaList = socialMediaService.getAllSocialMedia();
    this.filterSettingsStore.dispatch({ type: 'SETEND', payload: new Date() });
    let start = new Date();
    start.setDate( start.getDate() - 10);
    this.filterSettingsStore.dispatch({ type: 'SETSTART', payload: start});
  }

  public toggleDropDownVisibility(elementId: string) {
    document.getElementById(elementId).classList.toggle("show");
  }

  public filterStocks() {
    let input, filter, span, i, div;
    input = document.getElementById("searchSymbolInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("symbolDropDown");
    span = div.getElementsByTagName("span");
    for (i = 0; i < span.length; i++) {
      let txtValue = span[i].textContent || span[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        span[i].style.display = "";
      } else {
        span[i].style.display = "none";
      }
    }
  }

  public selectSymbol(symbol: StockModel) {
    this.toggleDropDownVisibility('symbolDropDown');
    this.filterSettingsStore.dispatch({ type: 'SETMODEL', payload: symbol });
  }

  public selectSocial(social: string) {
    this.toggleDropDownVisibility('socialDropDown');
    this.filterSettingsStore.dispatch({ type: 'SETSOCIAL', payload: social });
  }

  public selectedStockSymbol(): StockModel {
    return this.filterSettingsStore.getState().model;
  }

  public selectedSocialMedia(): string {
    return this.filterSettingsStore.getState().socialMedia;
  }

  public toggleActive(event: any) {
    var target = event.target || event.srcElement || event.currentTarget;
    target.classList.toggle("active");
    var panel = target.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }

  public startDate(): Date {
    return this.filterSettingsStore.getState().startDate;
  }

  public endDate(): Date {
    return this.filterSettingsStore.getState().endDate;
  }

  public setStart(value: string) {
    this.filterSettingsStore.dispatch({type: 'SETSTART', payload: this.parseDate(value)})
  }

  public setEnd(value: string) {
    this.filterSettingsStore.dispatch({type: 'SETEND', payload: this.parseDate(value)})
  }

  public parseDate(dateString: string): Date {
    if (dateString) {
      return new Date(dateString);
    } else {
      return null;
    }
  }

  ngOnDestroy() {
    this.unSubscribe();
  }
}
