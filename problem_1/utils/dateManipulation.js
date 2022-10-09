const { splitDate } = require('./dateParsing');

// Specific date target helpers
function getDayMonthlyIndexOfMonthsForPeriod(startDate, endDate, dayMonthlyIndex = 1) {
  const [
    startYear = 1900,
    startMonth = 1,
    startDay = 1,
  ] = splitDate(startDate);
  const [
    endYear = 2000,
    endMonth = 12,
  ] = splitDate(endDate);

  const firstOfMonths = [];
  for (let year = startYear; year <= endYear; year++) {
    const startsPastMonthlyIndexDay = startDay > Number(dayMonthlyIndex);
    const baseMonth = firstOfMonths?.length
      ? 1
      : startsPastMonthlyIndexDay
        ? startMonth + 1
        : startMonth;
    const lastMonth = year === endYear
      ? endMonth
      : 12;

    for (let month = baseMonth; month <= lastMonth; month++) {
      firstOfMonths.push(`${year}-${month}-${dayMonthlyIndex}`);
    }
  }

  return firstOfMonths;
}
function getFirstOfMonthsForPeriod(startDate, endDate) {
  return getDayMonthlyIndexOfMonthsForPeriod(startDate, endDate, 1);
}

module.exports = {
  getDayMonthlyIndexOfMonthsForPeriod,
  getFirstOfMonthsForPeriod,
};
