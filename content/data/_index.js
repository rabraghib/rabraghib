// Content entry point
// Accessible in TS via: @rabraghib/content
const about = require('./about.json');
const blog = require('./blog.json');
const brand = require('./brand.json');
const projects = require('./projects.json');

module.exports = {
  AboutData: about,
  BlogData: {
    ...blog,
    posts: blog.posts.map(post => ({
      ...post,
      url: post.publishedOn['hashnode'] || Object.values(post.publishedOn)[0]
    }))
  },
  BrandData: brand,
  ProjectsData: projects
};
