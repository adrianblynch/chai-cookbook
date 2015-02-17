# Chai Cookbook

A problem-solution list built up alongside my knowledge of Mocha and Chai.

TODO: A quick note on what Mocha is and what Chai is.

If you'd rather look at code, drill into index.js. All expects should pass and are generally paired with their opposite using `not`.

## Arrays

### Expect an array to contain a value

`expect([1,2,3]).to.include(2);`

Or not:

`expect([1,2,3]).to.not.include(4);`

### Expect an array to be the same as another array

`expect([1,2,3]).to.deep.equal([1,2,3]);`

