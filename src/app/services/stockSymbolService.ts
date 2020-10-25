import { Injectable, Inject } from '@angular/core';
import { StockModel } from '../model/stockModel';
import { IStockSymbolProvider } from '../providers/interface/StockSymbolProvider';
import { SymbolsService } from './interface/SymbolService';
import { Store } from '../store/store';

@Injectable({
    providedIn: 'root',
})

export class StockSymbolService implements SymbolsService{
    constructor(@Inject('StockProvider') private provider: IStockSymbolProvider,
                @Inject('StockSymbolStore') private store: Store<Array<StockModel>>) {
    }

    getAllStockSymbol() {
        this.provider.getAllStockSymbol().subscribe((data: Array<StockModel>) => {
            this.store.dispatch({type: 'SET', payload: data});
          });
    }
}
