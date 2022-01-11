const birthday = require('../content/data/_index').AboutData.birthday;

const fullAge = calculateAge(birthday);
const currentVersion = require('../package.json').version;
const versionMajorMinor = `${fullAge.years}.${fullAge.months}.`;
const version = `${versionMajorMinor}${
  currentVersion.startsWith(versionMajorMinor)
    ? 1 + parseInt(currentVersion.slice(versionMajorMinor.length))
    : 0
}`;
const isCurrent = process.argv.slice(2)[0] === '--current';

console.log(isCurrent ? currentVersion : version);

function calculateAge(birthday) {
  birthday = new Date(birthday);
  const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const d1 = birthday.getDate();
  const m1 = 1 + birthday.getMonth();
  const y1 = birthday.getFullYear();

  const date = new Date();
  let d2 = date.getDate();
  let m2 = 1 + date.getMonth();
  let y2 = date.getFullYear();

  if (d1 > d2) {
    d2 = d2 + months[m2 - 1];
    m2 = m2 - 1;
  }
  if (m1 > m2) {
    m2 = m2 + 12;
    y2 = y2 - 1;
  }
  var d = d2 - d1;
  var m = m2 - m1;
  var y = y2 - y1;
  return {
    years: y,
    months: m,
    days: d
  };
}
