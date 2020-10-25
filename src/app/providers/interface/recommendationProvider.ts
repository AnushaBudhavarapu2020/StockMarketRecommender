import { FilterSettings } from 'src/app/model/filterSettings';

export interface IRecommendationProvider{
    getRecommendation(currentSettings: FilterSettings, postCount: number);
}