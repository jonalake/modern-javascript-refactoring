## Modern JavaScript Refactoring Exercise

This is an exercise in refactoring. Your goal is improve the quality of the code while keeping the behavior the same.

## Running Tests

First, run the tests. You'll need to set this up as a node project. Then, install `jest`:

```bash
npm install jest
```

Then add this to the top level of the `package.json` file:

```json
  "type": "module",
```

Lastly, change the `test` script to this:

```json
  "test": "node --experimental-vm-modules ./node_modules/.bin/jest"
```

You should now be able to run `npm test` and see all of the tests passing.

## Refactoring

Improve the code while continuing to keep the tests passing. Make sure you make the following changes:

* Rewrite all references to `var`
* Rewrite all destructive operations, including all object mutations and incrementing
* Rewrite all `if` and `switch` statements to use ternaries, defaults, short-circuiting, and dictionary lookup
* Rewrite all function expressions as arrow functions
* Give the player name parameters defaults of `"player1"` and `"player2"`
* Move the `getScore` function to a file called `game-utilities.js` and import them into `index.js` (you will need to re-export it to keep the tests working)

Finally, add two new features:

* Replace the incrementing game IDs with ones generated from the npm package [`uuid`](https://www.npmjs.com/package/uuid).
* Create a web page that uses these functions to display all the possible scores in tennis. Deploy it.

## Reference: Possible Tennis Scores

Feel free to use this array to build your website:

```js
const allStates = [
  [0, 0, "Love-All"],
  [1, 1, "Fifteen-All"],
  [2, 2, "Thirty-All"],
  [3, 3, "Deuce"],
  [4, 4, "Deuce"],

  [1, 0, "Fifteen-Love"],
  [0, 1, "Love-Fifteen"],
  [2, 0, "Thirty-Love"],
  [0, 2, "Love-Thirty"],
  [3, 0, "Forty-Love"],
  [0, 3, "Love-Forty"],
  [4, 0, "Win for player1"],
  [0, 4, "Win for player2"],

  [2, 1, "Thirty-Fifteen"],
  [1, 2, "Fifteen-Thirty"],
  [3, 1, "Forty-Fifteen"],
  [1, 3, "Fifteen-Forty"],
  [4, 1, "Win for player1"],
  [1, 4, "Win for player2"],

  [3, 2, "Forty-Thirty"],
  [2, 3, "Thirty-Forty"],
  [4, 2, "Win for player1"],
  [2, 4, "Win for player2"],

  [4, 3, "Advantage player1"],
  [3, 4, "Advantage player2"],
  [5, 4, "Advantage player1"],
  [4, 5, "Advantage player2"],
  [15, 14, "Advantage player1"],
  [14, 15, "Advantage player2"],

  [6, 4, "Win for player1"],
  [4, 6, "Win for player2"],
  [16, 14, "Win for player1"],
  [14, 16, "Win for player2"]
]; 
```
