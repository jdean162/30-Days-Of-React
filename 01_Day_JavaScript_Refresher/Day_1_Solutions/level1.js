const emptyArray = [];

const fiveArray = [
    'one',
    'two',
    'three',
    'four',
    'five',
];
/*
console.log('Array length: '+ fiveArray.length)
console.log('First item: ' + fiveArray[0]);
console.log('Middle item: ' + fiveArray[(fiveArray.length-1)/2]);
console.log('Last item: ' + fiveArray[fiveArray.length-1]);
*/

const mixedDataTypes = [
    'Asabeneh',
    250,
    true,
    { country: 'Finland', city: 'Helsinki' },
    { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] },
    'Test'
];

const itCompanies = [
    'Facebook',
    'Google',
    'Microsoft',
    'Apple',
    'IBM',
    'Oracle',
    'Amazon'
];

/*console.log(itCompanies);


console.log('itCompanies length: '+ itCompanies.length)
console.log('itCompanies item: ' + itCompanies[0]);
console.log('itCompanies item: ' + itCompanies[(itCompanies.length-1)/2]);
console.log('itCompanies item: ' + itCompanies[itCompanies.length-1]);

itCompanies.forEach(company => {console.log(company)})
*/

console.log(itCompanies.join() + ' are big IT companies')
const test1 = (itCompanies.indexOf('Goggle') !== -1 ) ? itCompanies[itCompanies.indexOf('Google')] : 'No company in the list';
console.log(test1);

const filter0 = itCompanies.filter(res => {

})
