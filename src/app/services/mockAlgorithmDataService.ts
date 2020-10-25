import { Injectable } from '@angular/core';
import { AlgorithmService } from './interface/AlgorithmService';
import { Algorithm } from '../model/enums/algorithmEnum';

@Injectable({
    providedIn: 'root',
})

export class MockAlgorithmDataService implements AlgorithmService{
    constructor() {
    }

    getAlgorithms() : Array<string> {
        return Object.keys(Algorithm);
    }
}
