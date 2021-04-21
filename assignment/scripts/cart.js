console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
const maxItems = 5;

function isFull() {
  if (basket.length < maxItems) {
    return false;
  } // returning false if basket isn't full yet
  else {
    return true;
  } // returning true if our basket is full or overflowing
} // end full

console.log('Testing our isFull function, expecting false', isFull());

function addItem( item ) {
  let basketLength = basket.length; // Finding a new way to check if an item was added
  if (isFull() === false) {
    basket.push(item); // Adding item to the end of basket
  } // Update: Item only gets added if there's room in basket
  if (basketLength < basket.length) { // Checking if the basket array is larger than before
    return true;
  } // end if
  else {
    return false; // returns false if an item wasn't added
  } // end else
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
console.log('Checking if our basket is full now, expecting true:', isFull());

console.log('Checking our updated addItem, expecting false because of the grapes:', addItem('papaya'));
console.log('Clearing the basket again, no more grapes:', empty());
console.log('Seeing if our addItem works now that grapes are gone, expecting true:', addItem('papaya'));
console.log(`Examing our smaller basket: ${basket}`);

const removeItem = (item) => {
  let x = basket.indexOf(item);
  if (x >=0) { // If item exists in array, it's indexOf will come back 0 or positive
    return basket.splice(x,1);
  } // end if
  else { // If item doesn't exist, it's indexOf comes back -1.
    return null;
  } // end else
} // end removeItem

console.log('Filling our basket again with unique items, true:', addItem('apple'));
console.log('Filling our basket again with unique items, true:', addItem('pear'));
console.log('Filling our basket again with unique items, true:', addItem('lemon'));
console.log('Filling our basket again with unique items, true:', addItem('lime'));
console.log('Oops, basket if full, no room for dragonfruit, false:', addItem('dragonfruit'));
console.log('Basket now contains, returning false:', listItems2());

console.log('Removing pear, returning pear:', removeItem('pear'));
console.log('Removing apple, returning papaya:', removeItem('papaya'));
console.log('Checking our basket again, returning true:', listItems());
console.log('Trying to remove nonexistent dragonfruit, returning null:', removeItem('dragonfruit'));
