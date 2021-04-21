console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

function addItem( item ) {
  basket.push(item); // Adding item to the end of basket
  if (basket[basket.length-1]===item) { //Checking if the last element of basket is item
    return true;
  } // end conditional
} // end addItem

console.log('This is an empty basket:', basket);
console.log('Adding mango to the basket, true should return', addItem( 'mango' ));
console.log('Adding kiwi to the basket, true should return', addItem( 'kiwi' ));
console.log( 'The basket now contains:', basket);

const listItems = () => {
  for (i=0; i<basket.length;i++) { // Iterating through each element
    console.log(basket[i]);
  } // end loop
  return true;
} // end listItems
console.log('List individually above, expecting true:', listItems());

function listItems2() {
  basket.forEach(items => console.log(items)); // Using a built-in instead
  return false;
} // end listItems2
console.log('Testing the secondary option for listItems, expect false', listItems2());

console.log('Adding banana to the basket, returning true', addItem( 'banana'));
console.log(' Testing both list functions, banana should be there, expecting true then false', listItems(), listItems2() );

const empty = () => {
  basket = [];
  return 'sad';
} // end empty

console.log(`Getting rid of our delicious fruits, returning 'sad':`, empty());
console.log(`Our basket is empty again: ${basket}`);
// Stretch goals!
const maxItems = 5;

function full() {
  if (basket.length < maxItems) {
    return false;
  } // returning false if basket isn't full yet
  else {
    return true;
  } // returning true if our basket is full or overflowing
} // end full

console.log('Testing our full function, expecting false', full());

function allTheGrapes() { // writing a function to overfill our basket
  while (basket.length <= maxItems) { // While loop should stop once basket is one above maxItems
    basket.push(' grape' );
  } // end loop
  if (basket.length > maxItems) {
    return 'too many grapes'; // returning if our basket is overfull
  } // end conditional
} // end allTheGrapes

console.log(`Filling up the basket, expecting 'too many grapes':`, allTheGrapes());
console.log('Examining our beautiful grapes, expecting true:', listItems());
console.log('Checking if our basket is full now, expecting true:', full());
