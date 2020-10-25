import { Injectable, Inject } from '@angular/core';
import { RecommendService } from './interface/RecommendService';
import { FilterSettings } from '../model/filterSettings';
import { IRecommendationProvider } from '../providers/interface/recommendationProvider';
import { Store } from '../store/store';

@Injectable({
    providedIn: 'root',
})

export class RecommendationService implements RecommendService {

    private unSubscribe: UnsubscribeCallback;
    constructor(@Inject('FilterSettingsStore') private filterSettingsStore: Store<FilterSettings>,
        @Inject('RecommendationProvider') private recommendationProvider: IRecommendationProvider,
        @Inject('SocialMediaCountStore') private socialCountStore: Store<number>) {
        this.unSubscribe = filterSettingsStore.subscribe(() => {
            if (this.filterSettingsStore.getState().fetched && this.filterSettingsStore.getState().CalculateRecommendation)
                this.getRecommendation();
        });
    }

    getRecommendation() {
        this.recommendationProvider.getRecommendation(this.filterSettingsStore.getState(), this.socialCountStore.getState());
    }
}
