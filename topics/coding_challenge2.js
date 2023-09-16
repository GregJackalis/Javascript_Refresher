// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/


"use strict";
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };


  // Task 1: Using a for-of loop to iterate through the game.scored array. Also used the Object.entries() method in order to also get the index of each element and then convert it to number and add 1 so the order of the numbers scored are formatted correctly
  for (const [index, scorer] of Object.entries(game.scored)) console.log(`Goal ${parseInt(index) + 1}: ${scorer}`);

  //------------------------------------------------------------------------------------------------------------------------------

  // Task 2: Used the Object.values to make an array out of the values of the game.odds object/property. If we tried to right away use the for-of loop without the Object.values() then we would get an error that we can't iretate over the game.odds property
  const odds = Object.values(game.odds);
  console.log(odds);
  let sum = 0;
  for (const odd of odds) sum += odd;
  sum = sum/odds.length;
  console.log(sum);

  //------------------------------------------------------------------------------------------------------------------------------

  // Task 3: Using the Object.entries() method to make an array on which each element is a 2-element-array, and then using by using destructuing of the array- we 
  //defined two variables, the key which is the name (tames1, teams2, x) and the values (which are the actual odds). Then inside the block is use a ternary operator to check if the key is 'x' which means draw, and if not by using the key names, i find the property of the game object that has the same name as the key, and i return it (${game[key]})
  console.log(Object.entries(game.odds));
  for (const [key, value] of Object.entries(game.odds)) {
    key == 'x' ? console.log(`Odd of draw: ${value}`) : console.log(`Odd of victory for ${game[key]}: ${value}`)
  }

  //------------------------------------------------------------------------------------------------------------------------------

  // BONUS
  const scorers = {
    [game.scored[1]]: 1,
    [game.scored[3]]: 1,
    [game.scored[0]]: 2
  }
  console.log(scorers);

  const scorersNew = {}
  for (const player of game.scored) scorersNew[player] ? scorersNew[player]++ : scorersNew[player] = 1;
  // what happens here is that by iterating of the game.scored array we check with a ternary operator if the player name already exists as a property inside the s
  //corersNew object (just how we get the ${game[key]} value on the above task), and if it exists already then we add one goal, if not we just use the " = 1" to create a new property with the new scorer, and give it the value of 1

  console.log(scorersNew)

 