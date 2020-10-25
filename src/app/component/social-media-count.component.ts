import { Component, Inject } from '@angular/core';
import { Store } from '../store/store';
import { FilterSettings } from '../model/filterSettings';
import { SocialCountService } from '../services/interface/SocialCountService';

@Component({
  selector: 'social-count',
  templateUrl: '../html/social.count.component.html',
  styleUrls: ['../css/social.count.component.css']
})

export class SocialMediaCountComponent {

  private unSubscribe: UnsubscribeCallback;

  constructor(@Inject('SocialMediaCountStore') private socialCountStore: Store<number>,
                @Inject('FilterSettingsStore') private filters: Store<FilterSettings>,
                @Inject('SocialMediaCountService') private socialMediaCountService: SocialCountService){
    this.unSubscribe = filters.subscribe(() => {
        if(this.filters.getState().fetched){
            this.socialMediaCountService.socialMediaCountGenerator(this.filters.getState());
        }
    });
  }

  public isFetched() : boolean{
    return this.filters.getState().fetched;
  }

  public postCount(): number{
      return this.socialCountStore.getState();
  }

}
