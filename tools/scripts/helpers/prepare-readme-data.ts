import * as DATA from '@rabraghib/content';
import { getBrandInfo } from '@ngaox/brands-warehouse';
import { getBadgeUrl, getColor, getQueryParamsOf } from './readme-theming';

module.exports = {
  ...DATA,
  ReadmeSocialBadges: [
    {
      badge: getBadgeUrl({
        color: getColor('slate-900'),
        endpoint: 'github/v/release/rabraghib/rabraghib'
      }),
      alt: `GitHub Release Version`,
      url: 'https://github.com/rabraghib/rabraghib'
    },
    {
      badge: getBadgeUrl({
        label: 'Mail me!',
        logo: 'mail'
      }),
      url: `mailto:${DATA.AboutData.email}`,
      alt: 'Mail me!'
    },
    ...DATA.AboutData.profiles
      .filter(p => p.platform !== 'github' && p.platform !== 'instagram')
      .map(p => {
        const brand = getBrandInfo(p.platform);
        return {
          badge: getBadgeUrl({
            label: brand?.name ?? p.platform,
            logo: brand?.icons?.['simpleicons'] ?? p.platform
          }),
          url: p.url,
          alt: `${DATA.AboutData.name} ${p.platform} profile`
        };
      })
  ],
  GithubStatsCardsUrls: [
    `https://github-readme-streak-stats.herokuapp.com/?${getQueryParamsOf(
      'streak-stats',
      DATA.AboutData.handle
    )}`,
    `https://github-readme-stats.vercel.app/api?${getQueryParamsOf(
      'stats',
      DATA.AboutData.handle
    )}`
  ]
};
