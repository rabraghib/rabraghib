// Content entry point
// Accessible in TS via: @rabraghib/content
const about = require('./about.json');
const blog = require('./blog.json');
const brand = require('./brand.json');
const projects = require('./projects.json');
const referencedBrands = require('./referenced-brands.json');

function getRawFileUrl(filePath) {
  return filePath
    ? `https://raw.githubusercontent.com/rabraghib/rabraghib/main/${filePath}`
    : '';
}

module.exports = {
  AboutData: {
    ...about,
    avatar: getRawFileUrl(about.avatar),
    banner: getRawFileUrl(about.banner),
    cli: {
      ...about.cli,
      screenshot: getRawFileUrl(about.cli.screenshot)
    }
  },
  BlogData: {
    ...blog,
    posts: blog.posts.map(post => ({
      ...post,
      url: post.publishedOn['hashnode'] || Object.values(post.publishedOn)[0]
    }))
  },
  BrandData: brand,
  ProjectsData: projects,
  ReferencedBrandsData: referencedBrands
};
