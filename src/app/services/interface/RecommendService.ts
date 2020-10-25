import { FilterSettings } from 'src/app/model/filterSettings';

export interface RecommendService{
    getRecommendation(currentFilter: FilterSettings, postCount: number);
}
