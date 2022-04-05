import { IBrandInfo } from './brand';

export interface IAbout {
  name: string;
  handle: string;
  website: string;
  headline: string;
  birthday: string;
  bio: string;
  avatar: string;
  picture: string;
  banner: string;
  email: string;
  stack: string[];
  addresses: string[];
  profiles: IProfile[];
}

export interface IProfile {
  platform: string;
  brand: IBrandInfo;
  url: string;
}
