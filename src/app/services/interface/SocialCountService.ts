import { FilterSettings } from 'src/app/model/filterSettings';

export interface SocialCountService{
    socialMediaCountGenerator(currentFilter: FilterSettings);
}
