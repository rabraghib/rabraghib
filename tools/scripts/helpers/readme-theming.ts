import { BrandData } from '@rabraghib/content';

function getColor(colorName: string) {
  return BrandData.colors[colorName]?.replace('#', '') ?? undefined;
}
export function getBadgeUrl(options: object = {}) {
  const [style, color, logo, logoColor, label, labelColor, message] = [
    options['style'] ?? 'for-the-badge',
    options['color'] ?? getColor('blue-100'),

    options['logo'] ?? options['label'] ?? '',
    options['logoColor'] ?? getColor('white'),

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
    setValue(statsCardsParams, ['fire', 'ring'], getColor('blue-100'));
    setValue(
      statsCardsParams,
      ['currStreakLabel', 'currStreakNum', 'sideNums', 'sideLabels'],
      getColor('white')
    );
    setValue(statsCardsParams, ['stroke', 'border'], getColor('white'));
    statsCardsParams.dates = getColor('blue-100');
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
      getColor('blue-100')
    );
    setValue(
      statsCardsParams,
      ['text_color', 'border_color'],
      getColor('white')
    );
  }
  return new URLSearchParams(statsCardsParams).toString();
}
function setValue<T>(obj: object, props: string[], value: T) {
  while (props.length > 0) obj[props.pop()] = value;
}
