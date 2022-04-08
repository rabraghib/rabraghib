const brand = require('./brand.json');
const about = require('./about.json');
const services = require('./services.json');
const projects = require('./projects.json');
const career = require('./career.json');

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
  ServicesData: services,
  ProjectsData: projects,
  CareerData: career
};
