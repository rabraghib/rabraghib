const boxen = require('boxen');
const chalk = require('chalk');
const align = require('align-text');

module.exports = data => {
  return chalk.hex(data.BrandData.colors.primary)(
    boxen(
      getCardContentSections(data)
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
};

function getCardContentSections(data) {
  const cardItems = getCLICardItems(data);
  const labelLength = Math.max(...cardItems.map(item => item.label.length + 1));
  return [
    {
      tag: 'to-center',
      section: Highlight(
        '/',
        data.BrandData.colors.primary,
        `${data.AboutData.name} `,
        ` ${data.AboutData.handle}`,
        data.BrandData.colors['slate-300']
      ),
      newLinesNum: 2
    },
    ...cardItems.map(item => {
      return {
        section: cardSection(item.label, item.value, labelLength),
        newLinesNum: item.newLinesNum
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
function getCLICardItems(data) {
  return [
    {
      label: 'Headline',
      value: Highlight(
        '',
        data.BrandData.colors.primary,
        data.AboutData.headline,
        '',
        data.BrandData.colors['slate-300']
      )
    },
    ...data.AboutData.profiles.map(p => {
      return {
        label: toTitleCase(p.platform),
        value: HighlightUrl(
          p.url,
          data.AboutData.handle,
          data.BrandData.colors.primary,
          data.BrandData.colors['slate-300']
        )
      };
    }),
    {
      label: 'Web',
      value: Highlight(data.AboutData.website, data.BrandData.colors.primary),
      newLinesNum: 2
    },
    {
      label: 'Card',
      value: Highlight(
        'rabraghib',
        data.BrandData.colors.primary,
        'npx ',
        '',
        data.BrandData.colors['slate-300']
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
function Highlight(text, highlightColor, prefix = '', suffix = '', color) {
  const colorize = chalk.hex(color + '');
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
