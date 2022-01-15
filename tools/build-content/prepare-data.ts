import * as DATA from '@rabraghib/content';
import { createCLICard } from './cli-card-content';
import { getBadgeUrl, getColor, getQueryParamsOf } from './helpers';

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
      'streak-stats',
      DATA.AboutData.handle
    )}`,
    `https://github-readme-stats.vercel.app/api?${getQueryParamsOf(
      'stats',
      DATA.AboutData.handle
    )}`
  ],
  CLICardContent: createCLICard(DATA.AboutData, DATA.BrandData),
  Helpers: {
    getGithubFileRawUrl: (filePath, branch = 'main') => {
      return `https://raw.githubusercontent.com/rabraghib/rabraghib/${branch}/${filePath}`;
    }
  }
};
