const entries = require('./data/dataset.json');

const entryCount = entries.length;
console.log({ entryCount });

const allEntryKeys = Object.keys(entries[0]);
const entryAttributes = allEntryKeys.slice(0, 5);
console.log({ entryAttributes });

const entriesAttributesByKeys = entries.map(
  (entry) => {
    const attributeOnlyEntry = {};
    for (const attribute of entryAttributes) {
      attributeOnlyEntry[attribute] = entry[attribute];
    }

    return attributeOnlyEntry;
  }
);
// console.log({ entriesAttributesByKeys });

const allEntriesProducts = entriesAttributesByKeys.map(({ Product }) => Product.toLowerCase());
const allEntriesCountries = entriesAttributesByKeys.map(({ Country }) => Country.toLowerCase());
const allEntriesRegions = entriesAttributesByKeys.map(({ Region }) => Region.toLowerCase());
const allEntriesVarieties = entriesAttributesByKeys.map(({ Variety }) => Variety.toLowerCase());
const allEntriesGrades = entriesAttributesByKeys.map(({ Grades }) => Grades.toLowerCase());
// console.log({
//   allEntriesProducts,
//   allEntriesCountries,
//   allEntriesRegions,
//   allEntriesVarieties,
//   allEntriesGrades,
// });

function reduceAttributes(values, value) {
  if (values.includes(value)) return values;
  return [...values, value];
}
const uniqueProducts = allEntriesProducts.reduce(reduceAttributes, []);
const uniqueContries = allEntriesCountries.reduce(reduceAttributes, []);
const uniqueRegions = allEntriesRegions.reduce(reduceAttributes, []);
const uniqueVarieties = allEntriesVarieties.reduce(reduceAttributes, []);
const uniqueGrades = allEntriesGrades.reduce(reduceAttributes, []);
console.log({
  uniqueProducts,
  uniqueContries,
  uniqueRegions,
  uniqueVarieties,
  uniqueGrades,
});


// Group similar data
const entryByProductVarieties = {};
entries.forEach(entry => {
  if (
    entry.Variety
    && !(entryByProductVarieties[entry.Product] && entry.Variety in entryByProductVarieties[entry.Product])
  ) {
    if (entryByProductVarieties[entry.Product]) {
      entryByProductVarieties[entry.Product][entry.Variety] = [
        ...(entryByProductVarieties[entry.Product][entry.Variety] || []),
        entry,
      ];
    } else {
      entryByProductVarieties[entry.Product] = {
        [entry.Variety]: [entry],
      };
    }
  }
})

// const regionsByCountries = {};
// for (const productName in entryByProductVarieties) {
//   for (const varietyName in entryByProductVarieties[productName]) {
//     entryByProductVarieties[productName][varietyName].forEach((entry) => {
//       // console.log({ entry });
//       if (
//         entry.Region
//         && !regionsByCountries[entry.Country]?.includes(entry.Region)
//       ) {
//         regionsByCountries[entry.Country] = [
//           ...(regionsByCountries[entry.Country] || []),
//           entry,
//         ];
//       }
//     })
//   }
// }