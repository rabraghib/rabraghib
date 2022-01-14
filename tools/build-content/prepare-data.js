const DATA = require('../../content/data/_index');
const cliCardContent = require('./cli-card-content');

const ReadmeIncludedProfiles = ['twitter', 'instagram', 'linkedin'];
const mailBadge = {
  badge: getBadgeUrl({
    label: 'Mail me!',
    logo: 'mail'
  }),
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
          badge: getBadgeUrl({
            label: p.platform
          }),
          url: p.url,
          alt: `${DATA.AboutData.name} ${p.platform} profile`
        };
      })
  ],
  ReadmeTechStackBadges: DATA.AboutData.stack.map(tech => {
    return {
      badge: getBadgeUrl({
        label: tech,
        color: getColor('slate-900'),
        logoColor: getColor('slate-50'),
        labelColor: getColor('primary')
      }),
      alt: `${tech}`
    };
  }),
  GithubStatsCardsUrls: [
    `https://github-readme-streak-stats.herokuapp.com/?${getQueryParamsOf(
      'streak-stats'
    )}`,
    `https://github-readme-stats.vercel.app/api?${getQueryParamsOf('stats')}`
  ],
  CLICardContent: cliCardContent(DATA),
  Helpers: {
    getGithubFileRawUrl: (filePath, branch = 'main') => {
      return `https://raw.githubusercontent.com/rabraghib/rabraghib/${branch}/${filePath}`;
    }
  }
};

function getColor(colorName) {
  return DATA.BrandData.colors[colorName].replace('#', '');
}
function getBadgeUrl(options = {}) {
  const [color, logoColor, labelColor, style] = [
    options.color ?? getColor('primary'),
    options.logoColor ?? getColor('slate-50'),
    options.labelColor ?? getColor('slate-900'),
    options.style ?? 'for-the-badge'
  ];
  options = {
    label: options.label ?? '',
    message: options.message ?? '',
    logo: options.logo ?? options.label ?? ''
  };
  return `https://img.shields.io/badge/${encodeURI(options.label)}-${
    options.message
  }-${color}?style=${style}&logo=${encodeURI(
    options.logo
  )}&logoColor=${logoColor}&labelColor=${labelColor}`;
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
    statsCardsParams.count_private = true;
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
