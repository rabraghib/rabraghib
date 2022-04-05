import {
  IAbout,
  IBrand,
  IBrandInfo,
  ICareer,
  IProject,
  ISkills
} from '../src/models';

export const BrandData: IBrand;
export const AboutData: IAbout;
export const SkillsData: ISkills;
export const ProjectsData: IProject[];
export const CareerData: ICareer;
export const ReferencedBrandsData: {
  [key: string]: IBrandInfo;
};
