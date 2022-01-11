const DATA = require('../../content/data/_index');
const cliCardContent = require('./cli-card-content');

const ReadmeIncludedProfiles = ['twitter', 'instagram', 'linkedin'];
const mailBadge = {
  badge: getBadgeUrl('Mail me!', 'mail'),
  url: `mailto:${DATA.AboutData.email}`,
  alt: 'Mail me!'
};

module.exports = {
  ...DATA,
  ReadmeSocialBadges: [
    mailBadge,
    ...DATA.AboutData.profiles
      .filter(p => ReadmeIncludedProfiles.includes(p.platform))
      .map(p => {
        return {
          badge: getBadgeUrl(p.platform),
          url: p.url,
          alt: `${DATA.AboutData.name} ${p.platform} profile`
        };
      })
  ],
  GithubStatsCardsUrls: [
    `https://github-readme-streak-stats.herokuapp.com/?${getQueryParamsOf(
      'streak-stats'
    )}`,
    `https://github-readme-stats.vercel.app/api?${getQueryParamsOf('stats')}`
  ],
  CLICardContent: cliCardContent(DATA)
};

function getColor(colorName) {
  return DATA.BrandData.colors[colorName].replace('#', '');
}
function getBadgeUrl(label, logo = label) {
  return `https://img.shields.io/badge/${encodeURI(label)}--${getColor(
    'primary'
  )}?style=for-the-badge&logo=${encodeURI(logo)}&logoColor=${getColor(
    'slate-50'
  )}&logoWidth=25&labelColor=${getColor('slate-900')}`;
}
function setValue(obj, props, value) {
  while (props.length > 0) obj[props.pop()] = value;
}
function getQueryParamsOf(type) {
  const statsCardsParams = {};

  if (type == 'streak-stats') {
    statsCardsParams.user = DATA.AboutData.handle;
    setValue(
      statsCardsParams,
      ['fire', 'ring', 'currStreakLabel'],
      getColor('primary')
    );
    setValue(
      statsCardsParams,
      ['currStreakNum', 'sideNums', 'sideLabels'],
      getColor('slate-200')
    );
    setValue(statsCardsParams, ['stroke', 'border'], getColor('slate-200'));
    statsCardsParams.dates = getColor('slate-400');
    statsCardsParams.background = getColor('slate-900');
    statsCardsParams.hide_border = 'true';
  } else if (type == 'stats') {
    statsCardsParams.username = DATA.AboutData.handle;
    statsCardsParams.custom_title = 'Overall Stats';
    statsCardsParams.line_height = 30;
    statsCardsParams.show_icons = 'true';
    statsCardsParams.hide_border = 'true';
    statsCardsParams.hide = 'stars';
    statsCardsParams.bg_color = getColor('slate-900');
    setValue(
      statsCardsParams,
      ['title_color', 'icon_color'],
      getColor('primary')
    );
    setValue(
      statsCardsParams,
      ['text_color', 'border_color '],
      getColor('slate-200')
    );
  }
  return Object.keys(statsCardsParams)
    .map(key => `${key}=${statsCardsParams[key]}`)
    .join('&');
}
