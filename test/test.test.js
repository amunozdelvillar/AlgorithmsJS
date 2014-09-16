var chai = chai || require('chai.js');
expect = chai.expect;

describe('#test', function(){
    it('should fail', function(){
        expect('hello').to.equal('hello1');
    });
});