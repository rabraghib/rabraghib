import { IBrandInfo } from '@ngaox/brands-warehouse';

export interface IAbout {
  name: string;
  handle: string;
  website: string;
  headline: string;
  birthday: string;
  bio: string;
  picture: string;
  email: string;
  profiles: IProfile[];
}

export interface IProfile {
  platform: string;
  brand?: IBrandInfo;
  url: string;
}
