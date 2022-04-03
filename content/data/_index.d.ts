import { IAbout, IBrand, IBrandInfo, IProject } from '../src/models';

export const AboutData: IAbout;
export const BrandData: IBrand;
export const ProjectsData: IProject[];
export const ReferencedBrandsData: {
  [key: string]: IBrandInfo;
};
