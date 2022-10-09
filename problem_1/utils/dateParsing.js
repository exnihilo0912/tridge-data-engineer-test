// Date parsing helpers
function splitDate(date) {
  return date.split('-').map(dateFragment => Number(dateFragment));
}

module.exports = { splitDate };
