import { ReferencedBrandsData } from '../data/_index';
import { IBrandInfo } from './models';

export function getBrandInfo(slug: string): IBrandInfo {
  return ReferencedBrandsData[slug];
}
