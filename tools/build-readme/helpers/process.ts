import { BrandData } from '@rabraghib/content';

export function getColor(colorName: string) {
  return BrandData.colors[colorName].replace('#', '');
}
export function getBadgeUrl(options: any = {}) {
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
// export function getAllFilesInTree(root, dir = root, results = []) {
//   fs.readdirSync(dir).forEach(filePath => {
//     filePath = dir + '/' + filePath;
//     const stat = fs.statSync(filePath);
//     if (stat && stat.isDirectory()) {
//       results = [
//         ...results,
//         ...getAllFilesInTree(root, filePath, [...results])
//       ];
//     } else {
//       results.push(filePath);
//     }
//   });
//   return results;
// }
export function getQueryParamsOf(
  type: 'streak-stats' | 'stats',
  handle: string
) {
  const statsCardsParams: any = {};

  if (type == 'streak-stats') {
    statsCardsParams.user = handle;
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
    statsCardsParams.username = handle;
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
      ['text_color', 'border_color'],
      getColor('slate-200')
    );
  }
  return new URLSearchParams(statsCardsParams).toString();
}
function setValue(obj, props, value) {
  while (props.length > 0) obj[props.pop()] = value;
}
