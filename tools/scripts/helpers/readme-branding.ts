import { BrandData } from '@rabraghib/content';

export function getColor(colorName: string) {
  return BrandData.colors[colorName].replace('#', '');
}
export function getBadgeUrl(options: object = {}) {
  const [style, color, logo, logoColor, label, labelColor, message] = [
    options['style'] ?? 'for-the-badge',
    options['color'] ?? getColor('primary'),

    options['logo'] ?? options['label'] ?? '',
    options['logoColor'] ?? getColor('slate-50'),

    options['label'] ?? '',
    options['labelColor'] ?? getColor('slate-900'),

    options['message'] ?? ''
  ];
  return `https://img.shields.io/badge/${encodeURI(
    label
  )}-${message}-${color}?style=${style}&logo=${encodeURI(
    logo
  )}&logoColor=${logoColor}&labelColor=${labelColor}`;
}
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
function setValue<T>(obj: object, props: string[], value: T) {
  while (props.length > 0) obj[props.pop()] = value;
}
