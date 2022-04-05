const brand = require('./brand.json');
const about = require('./about.json');
const skills = require('./skills.json');
const projects = require('./projects.json');
const career = require('./career.json');
const referencedBrands = require('./referenced-brands.json');

function getRawFileUrl(filePath) {
  if (filePath.startsWith('content/assets')) {
    return `https://rabraghib.me/${filePath.substring(8)}`;
  }
  return filePath
    ? `https://raw.githubusercontent.com/rabraghib/rabraghib/main/${filePath}`
    : '';
}

module.exports = {
  BrandData: brand,
  AboutData: {
    ...about,
    avatar: getRawFileUrl(about.avatar),
    picture: getRawFileUrl(about.picture),
    banner: getRawFileUrl(about.banner)
  },
  SkillsData: skills,
  ProjectsData: projects,
  CareerData: career,
  ReferencedBrandsData: referencedBrands
};
