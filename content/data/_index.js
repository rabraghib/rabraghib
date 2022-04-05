const brand = require('./brand.json');
const about = require('./about.json');
const skills = require('./skills.json');
const projects = require('./projects.json');
const career = require('./career.json');
const referencedBrands = require('./referenced-brands.json');

function getRawFileUrl(filePath) {
  return filePath
    ? `https://raw.githubusercontent.com/rabraghib/rabraghib/main/${filePath}`
    : '';
}

module.exports = {
  BrandData: brand,
  AboutData: {
    ...about,
    banner: getRawFileUrl(about.banner)
  },
  SkillsData: skills,
  ProjectsData: projects,
  CareerData: career,
  ReferencedBrandsData: referencedBrands
};
