const { getFirstOfMonthsForPeriod } = require('./utils/dateManipulation');
const { verboseDayOfWeek } = require('./utils/weekday');
const { splitDate } = require('./utils/dateParsing');

const arguments = process.argv.slice(2);
const options = arguments.filter(argument => argument.startsWith('-'));

if (options.some(option => option === '-h' || option === '--help')) {
  console.log('node main.js [-h | -v | --help | --verbose] [startDate] [endDate]');
  return;
}

const [startDate = '1900-1-1', endDate = '2000-12-31'] = arguments.filter(argument => !argument.startsWith('-'));

const firstOfMonths = getFirstOfMonthsForPeriod(startDate, endDate);
const firstOfMonthSundays = firstOfMonths.filter(
  date => verboseDayOfWeek(...splitDate(date)) === 'sunday'
);

if (options.some(option => option === '-v' || option === '--verbose')) {
  firstOfMonthSundays.forEach(sundayDate => console.log(sundayDate));
  console.log(`\n${'#'.repeat(30)}\n`);
}

console.log(firstOfMonthSundays.length);
