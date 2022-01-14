import { IAbout, IBlog, IBrand, IBrandInfo, IProject } from '../src/models';

export const AboutData: IAbout;
export const BlogData: IBlog;
export const BrandData: IBrand;
export const ProjectsData: IProject[];
export const ReferencedBrandsData: {
  [key: string]: IBrandInfo;
};
