// basic assertions: http://emberjs.com/api/classes/Ember.Test.html
// more robust assertions: https://github.com/LearnBoost/expect.js/
describe("Helpers", function () {

    describe("IntFormat", function () {

        it('properly formats 10000000', function() {
            var value = 10000000,
                rendered = Ember.Handlebars.helpers.intFormat._rawFunction(value),
                expected = '10,000,000';
            expect( rendered ).to.eql(expected);
        });

        it('properly formats 12', function() {
            var value = 12,
                rendered = Ember.Handlebars.helpers.intFormat._rawFunction(value),
                expected = '12';
            expect( rendered ).to.eql(expected);
        });

    });

});