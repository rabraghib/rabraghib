import {
  IAbout,
  IBrand,
  IBrandInfo,
  ICareer,
  IProject,
  IServices
} from '../src/models';

export const BrandData: IBrand;
export const AboutData: IAbout;
export const ServicesData: IServices;
export const ProjectsData: IProject[];
export const CareerData: ICareer;
export const ReferencedBrandsData: {
  [key: string]: IBrandInfo;
};
