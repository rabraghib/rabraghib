import * as DATA from '@rabraghib/content';
import { getBrandInfo } from '@ngaox/brands-warehouse';
import { getBadgeUrl, getQueryParamsOf } from './readme-theming';

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
      .filter(p => p.platform !== 'github')
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
