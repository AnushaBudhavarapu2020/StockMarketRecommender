import { Injectable } from '@angular/core';
import { IRecommendationProvider } from './interface/recommendationProvider';
import { FilterSettings } from '../model/filterSettings';
import { RecommendationEnum } from '../model/enums/RecommendationEnum';
import { Recommendation } from '../model/recommendation';

@Injectable({
    providedIn: 'root',
})

export class MockRecommendationProvider implements IRecommendationProvider {
    constructor() {
    }

    public getRecommendation(currentSetting: FilterSettings, postCount: number) {
        if (currentSetting.fetched) {
            currentSetting.model.Values.forEach(value => {
                let recommendation = Math.floor(Math.random() * 3);
                value.Recommendation = new Recommendation(RecommendationEnum[recommendation]);
            });
        }
    }
}