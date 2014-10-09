var chai = chai || require('chai');
expect = chai.expect;

describe('#quickFind', function(){
    var qu;
    beforeEach(function(){
        qu = new QuickUnion();
        qu.init(10);
    });

    it('should set an id for each object to it\'s corresponding index', function(){
        expect(qu.id).to.have.length(10);
    });

    it('should be able to check if two points are in the same connected component', function(){
        qu.union(1,2);
        qu.union(3,4);
        qu.union(1,3);
        expect(qu.connected(1,2)).to.equal(true);
        expect(qu.connected(3,4)).to.equal(true);
        expect(qu.connected(1,2)).to.equal(true);
        expect(qu.connected(1,3)).to.equal(true);
        expect(qu.connected(1,4)).to.equal(true);
    });

    it('should be able to connect two components', function(){
        qu.union(1,9);
        qu.union(2,8);
        expect(qu.connected(1,9)).to.equal(true);
        expect(qu.connected(2,8)).to.equal(true);
    });
});