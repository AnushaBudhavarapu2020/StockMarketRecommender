import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, observable } from 'rxjs';
import { StockModel } from '../model/stockModel';
import { map } from 'rxjs/operators';
import { IStockSymbolProvider } from './interface/StockSymbolProvider';

@Injectable({
    providedIn: 'root',
})

export class MockStockSymbolProvider implements IStockSymbolProvider {
    constructor(private http: HttpClient) {
    }

    private symbolsList: Array<StockModel> = [];

    getAllStockSymbol(): Observable<Array<StockModel>> {
        if (this.symbolsList.length > 0) {
            return Observable.create(observer => {
                observer.next(this.symbolsList);
                observer.complete();
            });
        } else {
            return this.http.get("./assets/data/stockSymbolList.json").pipe(map((data: any) => {
                data.symbols.forEach(symbol => {
                    this.symbolsList.push(new StockModel(symbol.Code, symbol.Name));
                });
                return this.symbolsList;
            }));
        }
    }
}