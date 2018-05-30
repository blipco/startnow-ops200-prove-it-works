const expect = require('chai').expect;
const Mortgage = require('../../src/js/lib/Mortgage');

describe('Mortgage Calculator', () => {
    let mortgage = null;

    it("should have a function named monthlyPayment", () => {
        mortgage = new Mortgage();
        expect(mortgage.monthlyPayment()).to.exist;
    });

    it('monthly payment should equal $2020.70', () => {
        mortgage = new Mortgage(450000, 3.5, 30, 12);
        expect(mortgage.monthlyPayment()).to.equal('2020.70')
    })

    it('monthly payment should equal $3194.57', () => {
        mortgage = new Mortgage(500000, 1.9, 15, 12);
        expect(mortgage.monthlyPayment()).to.equal('3194.57')
    })

    it('monthly payment should equal $9596.81', () => {
        mortgage = new Mortgage(500000, 1.9, 15, 4);
        expect(mortgage.monthlyPayment()).to.equal('9596.81')
    })
   
});
