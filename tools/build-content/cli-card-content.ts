import boxen from 'boxen';
import chalk from 'chalk';
import align from 'align-text';
import { IAbout, IBrand } from '@rabraghib/content';

export function createCLICard(AboutData: IAbout, BrandData: IBrand) {
  return chalk.hex(BrandData.colors['primary'])(
    boxen(
      getCardContentSections(AboutData, BrandData)
        .map(item => {
          return `${item.section}${'\n'.repeat(item.newLinesNum ?? 1)}`;
        })
        .join(''),
      {
        padding: 1,
        margin: 1,
        borderStyle: 'round'
      }
    )
  );
}
function getCardContentSections(AboutData: IAbout, BrandData: IBrand) {
  const cardItems = getCLICardItems(AboutData, BrandData);
  const labelLength = Math.max(...cardItems.map(item => item.label.length + 1));
  return [
    {
      tag: 'to-center',
      section: Highlight(
        '/',
        BrandData.colors['primary'],
        `${AboutData.name} `,
        ` ${AboutData.handle}`,
        BrandData.colors['slate-300']
      ),
      newLinesNum: 2
    },
    ...cardItems.map(item => {
      return {
        section: cardSection(item.label, item.value, labelLength),
        newLinesNum: item.newLinesNum,
        tag: ''
      };
    })
  ].map((item, i, arr) => {
    const ANSIEscapeCodesRegex =
      // eslint-disable-next-line no-control-regex
      /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g;
    if (item.tag != 'to-center') {
      return item;
    }
    const overAllLength = Math.max(
      ...arr.map(
        item => item.section.trim().replace(ANSIEscapeCodesRegex, '').length
      )
    );
    return {
      ...item,
      section: `${' '.repeat(
        Math.floor(
          (overAllLength -
            item.section.replace(ANSIEscapeCodesRegex, '').length) /
            2
        )
      )}${item.section}`
    };
  });
}
function getCLICardItems(AboutData: IAbout, BrandData: IBrand) {
  return [
    {
      label: 'Headline',
      value: Highlight(
        '',
        BrandData.colors['primary'],
        AboutData.headline,
        '',
        BrandData.colors['slate-300']
      ),
      newLinesNum: 1
    },
    ...AboutData.profiles.map(p => {
      return {
        label: toTitleCase(p.platform),
        value: HighlightUrl(
          p.url,
          AboutData.handle,
          BrandData.colors['primary'],
          BrandData.colors['slate-300']
        ),
        newLinesNum: 1
      };
    }),
    {
      label: 'Web',
      value: Highlight(AboutData.website, BrandData.colors['primary']),
      newLinesNum: 2
    },
    {
      label: 'Card',
      value: Highlight(
        'rabraghib',
        BrandData.colors['primary'],
        'npx ',
        '',
        BrandData.colors['slate-300']
      ),
      newLinesNum: 0
    }
  ];
}
function HighlightUrl(url, handle, highlightColor, color) {
  const substr = url.match(new RegExp(`(@|~)?${handle}`))?.[0];
  const parts = url.split(substr);
  return Highlight(substr, highlightColor, parts[0], parts[1], color);
}
function Highlight(text, highlightColor, prefix = '', suffix = '', color = '') {
  const colorize = chalk.hex(color);
  return `${prefix && colorize(prefix)}${chalk.hex(highlightColor)(text)}${
    suffix && colorize(suffix)
  }`;
}
function cardSection(label, value, labelLength) {
  return `${chalk.white.bold(
    align(`${label}:`, len => labelLength - len)
  )}  ${value}`;
}
function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
