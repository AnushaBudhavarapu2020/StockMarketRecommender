import { Injectable } from '@angular/core';
import { ISocialMediaService } from './interface/socialMediaService';
import { SocialMedia } from '../model/enums/socialMedia';

@Injectable({
    providedIn: 'root',
})

export class MockSocialMediaService implements ISocialMediaService{
    constructor() {
    }

    getAllSocialMedia() : Array<string> {
        return Object.keys(SocialMedia);
    }
}
