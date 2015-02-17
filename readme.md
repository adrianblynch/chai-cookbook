# Chai Cookbook

A problem-solution list built up alongside my knowledge of Mocha and Chai.

TODO: A quick note on what Mocha is and what Chai is.

If you'd rather look at code, drill into index.js. All expects should pass and are generally paired with their opposite using `not`.

What's wrong with the Chai docs? I don't like them! I've never once looked at them without hitting `Cmd+F` to search the page. Consider this a note-taking exercise.

## Arrays

### Expect an array to contain a value

`expect([1,2,3]).to.include(2)`

Or not:

`expect([1,2,3]).to.not.include(4)`

### Expect an array to be the same as another array

`expect([1,2,3]).to.deep.equal([1,2,3])`

Or not:

`expect([1,2,3]).to.deep.equal([1,2,3,4])`

Note that this fails:

`expect([1,2,3]).to.equal([1,2,3])`

## Objects

### Expect object to contain a property

`expect({x: 1, y: 2, z: 3}).to.include.key('x')`

expect(response.result).to.have.keys(adminFields)
