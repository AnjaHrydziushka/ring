const toTitleCase = require('to-title-case');

console.log(toTitleCase);

const lower = 'the lord of the rings: the return of the king';
const little = toTitleCase(lower);

console.log(little);