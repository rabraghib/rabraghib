#!/usr/bin/env ts-node

import boxen from 'boxen';
import chalk from 'chalk';
import * as fs from 'fs';
import * as path from 'path';
import align from 'align-text';
import { IAbout, IBrand, AboutData, BrandData } from '@rabraghib/content';
import { version } from '../../package.json';

const outputPath = path.resolve(
  __dirname,
  '../../projects/cli-card/bin/output'
);

// True-Color support
chalk.level = 3;

console.log(`Building cli-card output`);
fs.writeFileSync(outputPath, createCLICard(AboutData, BrandData));

function createCLICard(AboutData: IAbout, BrandData: IBrand) {
  return chalk.hex(BrandData.colors['blue-100'])(
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
        BrandData.colors['blue-100'],
        `${AboutData.name} `,
        ` ${AboutData.handle}`,
        BrandData.colors['white']
      ),
      newLinesNum: 1
    },
    {
      tag: 'to-center',
      section: Highlight(
        `v${version.split('.', 1)[0]} year-old`,
        BrandData.colors['blue-100']
      ),
      newLinesNum: 2
    },
    {
      tag: 'to-center',
      section: Highlight(
        '',
        BrandData.colors['blue-100'],
        AboutData.headline,
        '',
        BrandData.colors['white']
      ),
      newLinesNum: 1
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
    ...AboutData.profiles.map(p => {
      return {
        label: toTitleCase(p.platform),
        value: HighlightUrl(
          p.url,
          AboutData.handle,
          BrandData.colors['blue-100'],
          BrandData.colors['slate-400']
        ),
        newLinesNum: 1
      };
    }),
    {
      label: 'Web',
      value: Highlight(AboutData.website, BrandData.colors['blue-100']),
      newLinesNum: 2
    },
    {
      label: 'Card',
      value: Highlight(
        'rabraghib',
        BrandData.colors['blue-100'],
        'npx ',
        '',
        BrandData.colors['slate-400']
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
