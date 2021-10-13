const lib = require('../dist/index').default;
const { expect } = require('chai');

describe('main module tests', () => {
    describe('factorial method tests', () => {
        it('should return 5', () => {
            const v = lib.fact(5);
            expect(v).to.equal(5);
        });
    });
});