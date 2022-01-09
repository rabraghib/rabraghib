// Content entry point
// Accessible in TS via: @rabraghib/content
const brand = require('./brand.json');
const about = require('./about.json');

const ReadmeIncludedProfiles = ['twitter', 'instagram', 'linkedin'];

module.exports = {
  about: about,
  blog: require('./blog.json'),
  brand: brand,
  ReadmeSocialBadges: about.profiles
    .filter(p => ReadmeIncludedProfiles.includes(p.platform))
    .map(p => {
      return {
        badge: getBadgeUrl(p.platform),
        url: p.url,
        alt: `${about.name} ${p.platform} profile`
      };
    }),
  GithubStatsUrls: [
    `https://github-readme-streak-stats.herokuapp.com/?${getQueryParamsOf(
      'streak-stats'
    )}`,
    `https://github-readme-stats.vercel.app/api?${getQueryParamsOf('stats')}`
  ]
};

function getColor(colorName) {
  return brand.colors[colorName].replace('#', '');
}
function getBadgeUrl(platform) {
  return `https://img.shields.io/badge/${platform}--${getColor(
    'primary'
  )}?style=for-the-badge&logo=${platform}&logoColor=${getColor(
    'slate-50'
  )}&logoWidth=25&labelColor=${getColor('slate-900')}`;
}
function getQueryParamsOf(type) {
  const statsCardsParams = {
    setValue: function (props, value) {
      while (props.length) this[props.pop()] = value;
    }
  };
  if (type == 'streak-stats') {
    statsCardsParams.user = about.handle;
    statsCardsParams.setValue(
      ['fire', 'ring', 'currStreakLabel'],
      getColor('primary')
    );
    statsCardsParams.setValue(
      ['currStreakNum', 'sideNums', 'sideLabels'],
      getColor('slate-200')
    );
    statsCardsParams.setValue(['stroke', 'border'], getColor('slate-200'));
    statsCardsParams.dates = getColor('slate-400');
    statsCardsParams.background = getColor('slate-900');
    statsCardsParams.hide_border = 'true';
  } else if (type == 'stats') {
    statsCardsParams.username = about.handle;
    statsCardsParams.custom_title = 'Overall Stats';
    statsCardsParams.line_height = 30;
    statsCardsParams.show_icons = 'true';
    statsCardsParams.hide_border = 'true';
    statsCardsParams.hide = 'stars';
    statsCardsParams.bg_color = getColor('slate-900');
    statsCardsParams.setValue(
      ['title_color', 'icon_color'],
      getColor('primary')
    );
    statsCardsParams.setValue(
      ['text_color', 'border_color '],
      getColor('slate-200')
    );
  }
  delete statsCardsParams.setValue;
  return Object.keys(statsCardsParams)
    .map(key => `${key}=${statsCardsParams[key]}`)
    .join('&');
}
