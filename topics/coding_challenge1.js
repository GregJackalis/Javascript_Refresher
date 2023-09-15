"use strict";

///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored*/


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

    printGoals: function(...players) {
      for (let i = 0; i < players.length; i++) {
        console.log(`Goal No.${i + 1}: ${players[i]}`)
      }
      console.log(`${players.length} goals were scored!`);
    }
};

// 1st Task: make two arrays for each team
const [players1, players2] = game.players;
console.log(players1);
console.log(players2);

//------------------------------------------------------------------------------------------------------------------------------

// 2nd Task: Make a variable containing first player (Neuer) and the rest put them in an array called fieldPlayers (used REAST operator)
const [gk, ...fieldPlayers] = players1;
console.log(gk);
console.log(fieldPlayers);

//------------------------------------------------------------------------------------------------------------------------------

// 3rd Task: Create an array allPlayers containing all the players from both teams (used SPREAD operator)
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//------------------------------------------------------------------------------------------------------------------------------

// 4th Task: Create a new array players1Final containing all the players from team1 and also include three more players (used SPREAD operator)
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

//------------------------------------------------------------------------------------------------------------------------------

// 5th Task: saved the property values into variables (used object destructuring)
const {team1, x: draw, team2} = game.odds; // OR const {odds: {team1, x: draw, team2}} = game;
// const {odds: {team1, x: draw, team2}} = game;
console.log(team1, draw, team2);

//------------------------------------------------------------------------------------------------------------------------------

// 6th Task: Testing it with data given (used REST operator to gather an arbitrary number of values given to the function)
game.printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich'); // TESTING FUNCTION
game.printGoals(...game.scored);

//OR MAKE THE FUNCTION HERE
const printGoalsPublic = function(...players) {
  for (let i = 0; i < players.length; i++) {
    console.log(`Goal No.${i + 1}: ${players[i]}`)
  }
  console.log(`${players.length} goals were scored!`);
}

printGoalsPublic('Greg', 'Meara');
printGoalsPublic(...game.scored);

//------------------------------------------------------------------------------------------------------------------------------

// 7th Task: Print out who's gonna win without using if statement or ternary operator, meaning logival operator needs to be used (used short circuiting method)
team1 < team2 && console.log('Team 1 is more likely going to win');
team1 > team2 && console.log('Team 2 is more likely going to win');

//For the record
//  IF
if (team1 < team2) console.log('Team 1 is more likely going to win');
if (team1 > team2) console.log('Team 2 is more likely going to win');

//  TERNARY
(team1 < team2) ? console.log('Team 1 is more likely going to win') : console.log('Team 2 is more likely going to win');

