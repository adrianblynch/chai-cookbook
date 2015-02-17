var expect = require('chai').expect

// Look for a value in an array
expect([1,2,3]).to.include(2)
// expect([1,2,3]).to.include(4) // Fail

// Compare array values
expect([1,2,3]).to.deep.equal([1,2,3])
// expect([1,2,3,4]).to.deep.equal([1,2,3]) // Fail
// expect([1,2,3]).to.deep.equal([1,2,3,4]) // Fail
// expect([1,2,3]).to.equal([1,2,3])        // Fail

// Compare array values ignoring order
expect([1,2,3]).to.have.members([3,2,1])
// expect([1,2,3]).to.have.members([1,2,3,4]) // Fail
// expect([1,2,3]).to.have.members([1])       // Fail

// Look for property in object
expect({x: 1, y: 2, z: 3}).to.include.key('x')
// expect({x: 1, y: 2, z: 3}).to.include.key('a') // Fail

// Look for multiple properties
expect({x: 1, y: 2, z: 3}).to.include.keys(['x', 'y'])

// Compare all properties
expect({x: 1, y: 2, z: 3}).to.have.keys(['x', 'y', 'z'])
//expect({x: 1, y: 2, z: 3}).to.have.keys(['x', 'y', 'z', 'a'])  // Fail
//expect({x: 1, y: 2, z: 3, a: 4}).to.have.keys(['x', 'y', 'z']) // Fail
