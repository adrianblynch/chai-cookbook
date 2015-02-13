var expect = require('chai').expect;

describe('chai', function() {

	it('xxx', function(done) {

		// Look for a value in and not in an array
		expect([1,2,3]).to.include(2);
		expect([1,2,3]).to.not.include(4);

		// To compare arrays:
		expect([1,2,3]).to.not.equal([1,2,3]);
		expect([1,2,3]).to.deep.equal([1,2,3]);

		// To compare arrays ignoring order
		expect([1,2,3]).to.have.members([3,2,1]);
		expect([1,2,3]).to.not.have.members([3]); // Needs 2 and 1 to fail

		done();

	});

});