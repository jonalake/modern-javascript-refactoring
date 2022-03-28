## Modern JavaScript Refactoring Exercise

This is an exercise in refactoring. First, run `npx jest` and confirm that the tests pass. Next, improve the code while continuing to keep the tests passing. Specifically, make the following changes:

* Rewrite all references to `var`
* Rewrite all destructive operations, including all object mutations
* Rewrite all `if` statements to use ternaries, defaults, and short-circuiting
* Rewrite all object short-circuit chains
* Rewrite all function expressions as arrow functions
* Move all function declarations to a file called `library.js` and import them into `index.js`

Finally, add two new features:

* Replace the hard-coded IDs in the object with ones from the npm package [`uuid`](https://www.npmjs.com/package/uuid).
* Create a web page that displays the results of the problem. Deploy it.
