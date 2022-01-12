export const AboutData: IAbout;
export const BlogData: IBlog;
export const BrandData: IBrand;
export const ProjectsData: IProject[];

export interface IAbout {
  name: string;
  handle: string;
  website: string;
  headline: string;
  birthday: string;
  cli: {
    packageName: string;
    scopedPackageName: string;
    screenshot: string;
  };
  bio: string;
  avatar: string;
  banner: string;
  email: string;
  addresses: string[];
  profiles: IProfile[];
}
export interface IBlog {
  website: string;
  posts: IPost[];
}
export interface IBrand {
  colors: string[];
}
export interface IProfile {
  platform: string;
  url: string;
}
type IPublishedOn = {
  [key: string]: string;
};
export interface IPost {
  title: string;
  slug: string;
  thumbnail: string;
  date: string;
  tags: string[];
  publishedOn: IPublishedOn;
  contentFile: string;
}
export interface ISocialBadge {
  badge: string;
  url: string;
  alt: string;
}
export interface IProject {
  name: string;
  thumbnail: string;
  description: string;
  topics: string[];
  liveUrl: string;
  sourceUrl: string;
}
