export const about: IAbout;
export const blog: IBlog;
export const brand: IBrand;
export const GithubStatsUrls: string[];
export const ReadmeSocialBadges: ISocialBadge[];

export interface IAbout {
  name: string;
  handle: string;
  bio: string;
  avatar: string;
  banner: string;
  email: string;
  addresses: string[];
  profiles: IProfile[];
}
export interface IBlog {}
export interface IBrand {}
export interface IProfile {
  platform: string;
  url: string;
}
export interface ISocialBadge {
  badge: string;
  url: string;
  alt: string;
}
