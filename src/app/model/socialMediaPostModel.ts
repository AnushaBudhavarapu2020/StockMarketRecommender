import { SocialMedia } from './enums/socialMedia';

export class SocialMediaPostModel{
    From: SocialMedia; 
    WrittenBy: string;
    Text: string;
    PostedOn: Date;
}