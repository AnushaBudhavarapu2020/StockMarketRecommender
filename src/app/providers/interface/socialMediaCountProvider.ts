import { FilterSettings } from 'src/app/model/filterSettings';
import { Observable } from 'rxjs';

export interface ISocialMediaCountProvider{
    getSocialMediaCount(currentSetting: FilterSettings) : Observable<number>;
}