
//with the 'const' statement, it's possible to maintain the value of the variable IMMUTABLE
//but, in the case of an array, you can change the values inside of it, but not the entire array
const guitars_brands = [
    'fender',
    'gibson',
    'SG',
    'Epiphone',
    'tagima'
];

//show the array guitars_brands
console.log('Array guitars_brands: ' + guitars_brands);

//creating a function to work in array with functiom expression and declaring a new var
var brands_size = guitars_brands.map(function(guitar_brand) {
    return guitar_brand.length;
})
//display the var array brands_size
console.log('Array brands_size with function expression and declaring new var: ' + brands_size);

//expressing the .map method on console.log with function expression without declaring a new var
console.log('Array guitars_brands with function expression without another var: ' + guitars_brands.map(function(guitar_brand2) {
    return guitar_brand2.length;
}))

//creating a function to work in array with an arrow function and declaring a new var
var guitars_brands_size2 = guitars_brands.map(gt_sizes => gt_sizes.length);
console.log('Arrow function to get the size of the elements declaring a new var: ' + guitars_brands_size2);

//creating a function to work in array with an arrow function without declaring a new var
console.log('Arrow function to get the size of elements without declaring new var: ' + guitars_brands.map(gt_size => gt_size.length));

//creating a var that receives the returned value from a function expression
//that put a message at the side of every value of the guitars_brands array
var gt_brands_size_fe = guitars_brands.map(function(gt_fe) {
    return gt_fe + ' it is a very good guitar! ';
})

//display the var gt_brands_size_fe
console.log('Display the var of the function expression that puts a message on array: ' + gt_brands_size_fe);

//creating a arrow function inside console.log that return every value of the array with
//a message

console.log('Arrow function putting a value on everey guitars_brands array: ' + guitars_brands.map(gt_a => gt_a + ' it is a very good guitar! '));

const guitars_brands2 = [
    'PRS',
    'Dean',
    'Takamine',
    'Ibanez',
    'Washburn',
    'Yamaha',
    'Guild',
];

console.log('guitars_brands2 array: ' + guitars_brands2);
var guitars_brands2_size = guitars_brands2.map(guitars2 => guitars2.length);
console.log('guitars_brands2_size with arrow function and declaring new var: ' + guitars_brands2_size);
console.log('guitars_brands2 size of elements without declaring another var: ' + guitars_brands2.map(guitars3 => guitars3.length));



//a little example taked from de MDN site
const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];

console.log('Materials array: ' + materials);
console.log('Materials elements size with arrow function: ' + materials.map(material => material.length));
//end of example

//the same example above, but without the arrow function

const materials2 = [
    'Carbon',
    'Nitrogen',
    'Oxigen',
    'Fluorine',
    'Chlorine',
    'Sulfur',
    'Phosphorus',
];

var materials2_size = materials2.map(function(materials) {
    return materials.length;
})

console.log('Materials2 array: ' + materials2);
console.log('Materials size array with no arrow function: ' + materials2_size);

//end of example