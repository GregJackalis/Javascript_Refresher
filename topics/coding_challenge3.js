"use strict";

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
    [17, '⚽️ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽️ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽️ GOAL'],
    [80, '⚽️ GOAL'],
    [92, '🔶 Yellow card'],
  ]);

// Task 1: An array have to be made only from the events inside the gameEvents Map, so we're using the .values method to get only the values. REMEMBER, there shouldn't be any duplicates:
const events = [new Set(gameEvents.values())];
console.log(events);

// Task 2: The yellow card at the 64th minute needs to be removed from the gameEvents Map:
gameEvents.delete(64);
console.log(gameEvents);

// Task 3: Find the average time of events happening during the match and print it to the console
let average = 0;
for (const [time, event] of gameEvents) average += time;
average = average /= 90;
console.log(`An event happened, on average, every ${Math.round(average)} minutes`);


// Task 4: Using a for-of loop i get every element (2-elements-array) from the gameEvents map, and i destructure it and then based whether the key value (time of the event) is before or after 45, i print the correct answer
for (const [key, value] of gameEvents) {
    key <= 45 ? console.log(`[FIRST HALF]: ${value}`) : console.log(`[SECOND HALF]: ${value}`);
}