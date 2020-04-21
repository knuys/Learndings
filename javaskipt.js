console.log(2); // This is an example for the console component of my page.

/*
console.log(5);
This is multi-line commenting.
*/

console.log('I am a string'); // This makes the string log to the console.
console.log(189); // This number is then logged/printed to the console. JS does not discriminate between log and print because it only has a console to log/print to.

console.log(2020 + 4); // This logs our 5 year anniversary.
console.log(25 + 3); // This is how old I will be when I get gud with codes.
console.log(50 - 40); // This is how many skincare products I should own.
console.log(3 % 2); // This is how many left over chicken pieces there will be at lunch.
console.log(100 / 2); // This is how many kisses we each get in a day.

console.log('I ' + 'love ' + 'my ' + 'Josh.'); // This logs I love my Josh. to the console.

console.log('Josh and I are sick this week, which is why I am learning Javascript'.length); // This logs the number of characters in the string value.

console.log('wow'.toUpperCase()); // This logs the string to the console in uppercase.
console.log('     snippy snip snip      '.trim()) // This removes the whitespace in the string (but not the spaces between each word).

console.log(Math.random()); // This logs a random number from 0 to 1 into the console. The 'Math' object is a built-in JS object, 'random' is a method it takes.
console.log(Math.random() * 40); // This multiplies a random number from 0 to 1 by 40.
console.log(Math.floor(Math.random() * 600)); // This rounds the multiplication of a random number to its nearest whole number.
console.log(Math.ceil(89.7)); // The method 'ceil()' returns the smallest integer greater than or equal to the given decimal number.
console.log(Number.isInteger(2020)); // This method checks to see if the given value is an integer. It returns either true or false.

var favoriteFood = 'sushi'; // Here I created the variable 'favourite food' and gave it the value 'sushi' which I like very much.
var numOfPieces = 28;
console.log(favoriteFood); // Output: sushi.
console.log(numOfPieces); // This whole segment will log my favourite food and the number of pieces I want right now.

let likeDoggos = false;
console.log(likeDoggos); //Output: false for 'likeDoggos'.
likeDoggos = true;
console.log(likeDoggos); //Output: true for 'likeDoggos'.

let wantDoggos;
console.log(wantDoggos); //Output: undefined.
likeDoggos = true;
console.log(likeDoggos); //Output: true for 'likeDoggos'.

const dessert = 'mango sticky rice';
//dessert = 'cookies'
console.log(dessert); // Output: type error. We cannot change a const like this.

const weather = 1;
console.log(weather); // Syntax error: in order to initialise a const, you must give it a value.

let x = 20
x -= 12
console.log(x); // Output: 8.
let y = 15
y *= 2
console.log(x); // Output: 30.

let gainedDoggo = 2;
gainedDoggo++; // Increases how many doggos gained by 1.
let gainedFlu = 3;
gainedFlu--; // Decreases how many flus I gain by 1.

let favoriteMascot = 'Mozilla red panda'
console.log('My favorite mascot is the ' + favoriteMascot + '.'); // Output: My favorite mascot is the Mozilla red panda.

const tastyFood = 'sushi';
const bestRestaurant = 'Sake';
console.log(`The best place to eat ${tastyFood} is ${bestRestaurant}.`); // Output: The best place to eat sushi is Sake.

let newDessert = 'strawberry sponge-cake';
console.log(typeof newDessert); // Output: string.
newDessert = 1;
console.log(typeof newDessert); // Output: number.

let hungryDoggo = true;
if (hungryDoggo) {
    console.log('Time for chimken!'); // Output: 'Time for chimken!' because hungryDoggo is true.
}

hungryDoggo = false;
if (hungryDoggo) {
    console.log('Time for chimken!'); // Output: does not log 'Time for chimken!' as hungryDoggo is false.
} else {
    console.log('Time to play fetch.')
}

let tiredLevel = 7;

if (tiredLevel > 7) {
    console.log('Time to sleep!');
} else {
    console.log('We can sleep later!');
}

let mood = 'happy';
let excitementlevel = 7;

if ((mood === 'happy') && (excitementlevel > 8)) {
    console.log('no dancing');
} else {
    console.log('time to dance');
}

let cakeSlices = 30;

if (cakeSlices) {
    console.log('Great! This will be a party!');
} else {
    console.log('Better get more cake!');
}


let favoriteCake = '';

if (favoriteCake) {
    console.log('This cake is delicious.');
} else {
    console.log('Please select your favorite cake.');
}

let weapon = 'Hylian Sword';
// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = weapon || 'potion';
console.log(`It's dangerous to go alone. Take this ${weapon}!`);

let isGood = true;
isGood ? console.log('You get a snack!') : console.log('No snacks for you!');

let basicGreeting = 'Howdy!';
basicGreeting === 'Howdy!' ? console.log('Howdy to you too!') : console.log('H-Hello?');

//Make your own bloody variables
let season = 'summer';
if (season === 'spring') {
    console.log('It\'s spring! The trees are budding!');
} else if (season === 'winter') {
    console.log('It\'s winter! Everything is covered in snow.');
} else if (season === 'fall') {
    console.log('It\'s fall! Leaves are falling!');
} else if (season === 'summer') {
    console.log('It\'s sunny and warm because it\'s summer!');
} else {
    console.log('Invalid season.');
}

let athleteFinalPosition = 'first place';

switch (athleteFinalPosition) {
    case 'first place':
        console.log('You get the gold medal!'); break;
    case 'second place':
        console.log('You get the silver medal!'); break;
    case 'third place':
        console.log('You get the bronze medal!'); break;

    default:
        console.log('No medal awarded.'); break;
}

function getReminder() {
    console.log('Water the plants.');
}

function greetInSpanish() {
    console.log('Buenas Tardes.');
}

function sayThanks() {
    console.log('Thank you for your purchase! We appreciate your business.');
}
sayThanks();


function sayThanks(name) {
    console.log('Thank you for your purchase ' + name + '! We appreciate your business.');
}
sayThanks('Josh');

function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs') {
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
}
makeShoppingList();

function monitorCount(rows, columns) {
    return rows * columns;
}

const numOfMonitors = monitorCount(5, 4);
console.log(numOfMonitors);

function monitorCount(rows, columns) {
    return rows * columns;
}

function costOfMonitors(rows, columns) {
    return monitorCount(rows, columns) * 200;
}
const totalCost = costOfMonitors(5, 4);
console.log(totalCost);

const plantNeedsWater = function (day) {
    if (day === 'Wednesday') {
        return true;
    } else {
        return false;
    }
}
plantNeedsWater('Tuesday');
console.log(plantNeedsWater('Tuesday'));

const plantNeedsWater1 = (day) => {
    if (day === 'Wednesday') {
        return true;
    } else { // Please cuddle your elses.
        return false;
    }
}
console.log(plantNeedsWater1('Wednesday'));

const plantNeedsWater2 = day => day === 'Wednesday' ? true : false; // This uses ternary which is a son of a bitch to read.
console.log(plantNeedsWater2('Thursday'));

const city = 'New York City';

function logCitySkyline() {
    let skyscraper = 'Empire State Building';
    return 'The stars over the ' + skyscraper + ' in ' + city;
}
console.log(logCitySkyline());

const satellite = 'The Moon'
{
};
const galaxy = 'The Milky Way'
{
};
const stars = 'North Star'
{
};
function callMyNightSky() {
    return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}
console.log(callMyNightSky());


function logVisibleLightWaves() {
    const lightWaves = 'Moonlight';
    console.log(lightWaves)
}
/*logVisibleLightWaves();
console.log(lightWaves); // I want this reference error to happen for learning reasons.*/


/*const satellite1 = 'The Moon';
const galaxy1 = 'The Milky Way';
let stars1 = 'North Star';
const callMyNightSky1 = () => {
    stars = 'Sirius';
    return 'Night Sky: ' + satellite1 + ', ' + stars1 + ', ' + galaxy1;
};

console.log(callMyNightSky1());

console.log(stars); // This is  an example of scope pollution harming code, it can also be resolved in this instance by using const on the global variable, and let on the local variables.

*/
const logVisibleLightWaves1 = () => {
    let lightWaves = 'Moonlight';
    let region = 'The Arctic';

    if (region === 'The Arctic') {
        let lightWaves = 'Northern Lights'

        console.log(lightWaves);
    }
};

logVisibleLightWaves1();

//arrays
const hobbies = ['gaming', 'eating', 'coding']
console.log(hobbies)

const flag = true;
const invertedValue = !flag;
console.log(invertedValue)

const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];
const listItem = famousSayings[0]
console.log(listItem);
console.log(famousSayings[2])

/*
let groceryList = ['bread', 'tomatoes', 'milk'];
groceryList[1] = 'avocados'

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];
const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];
condiments[0] = 'Mayo'
console.log(condiments);
condiments = ['Mayo'];
utensils[3] = 'Spoon'
console.log(utensils);*/

const objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length);

/*const chores = ['wash dishes', 'do laundry', 'take out trash'];
chores.push('vacuum','laundry');
console.log(chores);*/

const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];
chores.pop();
console.log(chores);

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
groceryList.shift();
console.log(groceryList);
groceryList.unshift('popcorn');
console.log(groceryList);
console.log(groceryList.slice(1, 4));
console.log(groceryList);
const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);

const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr) {
    arr[3] = 'MUTATED';
}
changeArr(concept);
console.log(concept);
function removeElement(newArr) {
    newArr.pop()
}
removeElement(concept);
console.log(concept);

const numberClusters = [[1, 2], [3, 4], [5, 6]];
const target = numberClusters[2][1];
console.log(target);

//loops 
// This should has loops
const vacationSpots = ['Wakayama', 'Bangkok', 'Venice'];
console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);

for (let counter = 5; counter < 11; counter++) {
    console.log(counter);
}

/*reverse looping
for (let counter = 3; counter >= 0; counter--) {
    console.log(counter);
  }

  const vacationSpots = ['Bali', 'Paris', 'Tulum'];
  for (let i = 0; i < vacationSpots.length; i++) {
    console.log('I would love to visit ' + vacationSpots[i]);
  }
*/
// 
const bobsFollowers = ['Ruth', 'David', 'Stephen', 'Merv']
const tinasFollowers = ['Kong', 'David', 'Merv']
const mutualFollowers = []
for (let i = 0; i < bobsFollowers.length; i++) {
    for (let j = 0; j < tinasFollowers.length; j++) {
        if (bobsFollowers[i] === tinasFollowers[j])
            mutualFollowers.push(bobsFollowers[i]);
    }
}
console.log(mutualFollowers);

const cards = ['diamond', 'spade', 'heart', 'club'];

// 
let currentCard = 'heart'
while (currentCard != 'spade') {
    currentCard = cards[Math.floor(Math.random() * 4)];
    console.log(currentCard);
}

// Review
const cupsOfSugarNeeded = 2
let cupsAdded = 0
do {
    cupsAdded = cupsAdded + 1;
} while (cupsAdded < cupsOfSugarNeeded)

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];
// Write you code below
for (let i = 0; i < rapperArray.length; i++) {
    console.log(rapperArray[i]);
    if (rapperArray[i] === 'Notorious B.I.G.') {
        break;
    }
}
console.log("And if you don't know, now you know.");

// Higher-Order Functions
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for (let i = 1; i <= 1000000; i++) {
        if ((2 + 2) != 4) {
            console.log('Something has gone very wrong :( ');
        }
    }
}


const is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes;
is2p2();
console.log(is2p2.name);

const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for (let i = 1; i <= 1000000; i++) {
        if ((2 + 2) != 4) {
            console.log('Something has gone very wrong :( ');
        }
    }
};

//Big confunsion - I disliked dis >:(
const addTwo = num => num + 2;
const timeFuncRuntime = funcParameter => {
    let t1 = Date.now();
    funcParameter();
    let t2 = Date.now();
    return t2 - t1;
};
const time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);

function checkConsistentOutput(funct, val) {
    const val1 = funct(val)
    const val2 = funct(val)
    if (val1 === val2) {
        return val1 // || val2
    } else {
        return 'This function returned inconsistent results'
    }
}
checkConsistentOutput(addTwo, 3);














