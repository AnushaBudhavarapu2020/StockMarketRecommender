import { ISocialMediaCountProvider } from './interface/socialMediaCountProvider';
import { FilterSettings } from '../model/filterSettings';
import { Observable } from 'rxjs';

export class MockSocialMediaCountProvider implements ISocialMediaCountProvider {
    getSocialMediaCount(currentSetting: FilterSettings): Observable<number> {
        let count = 0;
        if (currentSetting.endDate >= currentSetting.startDate) {
            count = this.getRandomValue(100);
        }
        return Observable.create(observer => {
            observer.next(count);
            observer.complete();
        });
    }

    private getRandomValue(max: number) {
        let precision = 1;
        return Math.floor(Math.random() * (max * precision - 1 * precision) + 1 * precision) / (1 * precision);
    }
}