(function(exports){
    var qu = function(){
        this.id = [];
    };

    qu.prototype.init = function( n ){
        for(var i = 0; i < n; i++){
            this.id.push(i);
        }
    };

    qu.prototype.root = function( p ){
        while( p != this.id[p]){
            p = this.id[p];
        }
        return p;
    };
    
    qu.prototype.connected = function( p , q ){
        return this.root(p) === this.root(q);
    };

    qu.prototype.union = function( p , q ){
        var i = this.root(p);
        var j = this.root(q);
        this.id[i] = j;
    };
    exports.QuickUnion = qu;
})(this);