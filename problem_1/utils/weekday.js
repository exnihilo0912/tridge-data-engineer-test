// Date to weekday helpers
function dayOfWeek(year, month, day) {
  const monthCodeIndex = [0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];
  const adjustedYear = month < 3 ? year - 1 : year;
  const yearCode = adjustedYear + adjustedYear / 4 - adjustedYear / 100 + adjustedYear / 400;
  const monthCode = monthCodeIndex[month - 1];
  const rawWeekDay = (yearCode + monthCode + day);

  return Math.floor(rawWeekDay % 7);
}
function verboseDayOfWeek(year, month, day) {
  const daysOfWeek = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
  ];

  return daysOfWeek[dayOfWeek(year, month, day)];
}

module.exports = {
  dayOfWeek,
  verboseDayOfWeek,
};
