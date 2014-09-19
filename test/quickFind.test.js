var chai = chai || require('chai');
expect = chai.expect;

describe('#quickFind', function(){
    var qf;
    beforeEach(function(){
        qf = new QuickFind();
        qf.init(10);
    });

    it('should set an id for each object to it\'s corresponding index', function(){
        expect(qf.id).to.have.length(10);
    });

    it('should be able to check if two points are in the same connected component', function(){
        qf.union(1,2);
        qf.union(3,4);
        qf.union(1,3);
        expect(qf.connected(1,2)).to.equal(true);
        expect(qf.connected(3,4)).to.equal(true);
        expect(qf.connected(1,2)).to.equal(true);
        expect(qf.connected(1,3)).to.equal(true);
        expect(qf.connected(1,4)).to.equal(true);
    });

    it('should be able to connect two components', function(){
        qf.union(1,9);
        qf.union(2,8);
        expect(qf.connected(1,9)).to.equal(true);
        expect(qf.connected(2,8)).to.equal(true);
    });
});