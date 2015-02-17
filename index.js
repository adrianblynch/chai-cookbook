var expect = require('chai').expect;

// Look for a value in an array
expect([1,2,3]).to.include(2);
// expect([1,2,3]).to.include(4); // Fail

// To compare arrays
expect([1,2,3]).to.deep.equal([1,2,3]);      // Pass
// expect([1,2,3,4]).to.deep.equal([1,2,3]); // Fail
// expect([1,2,3]).to.deep.equal([1,2,3,4]); // Fail
// expect([1,2,3]).to.equal([1,2,3]);        // Fail

// To compare arrays ignoring order
expect([1,2,3]).to.have.members([3,2,1]);      // Pass
// expect([1,2,3]).to.have.members([1,2,3,4]); // Fail
// expect([1,2,3]).to.have.members([1]);       // Fail