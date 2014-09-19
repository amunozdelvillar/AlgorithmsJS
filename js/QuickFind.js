(function(exports){
    var qf = function(){
        this.id = [];
    };

    qf.prototype.init = function(n){
        for(var i = 0; i < n; i++){
            this.id.push(i);
        }
    };
    
    qf.prototype.connected = function( p , q ){
        return this.id[p] == this.id[q];
    };

    qf.prototype.union = function( p , q ){
        var pid = this.id[p];
        var qid = this.id[q];
        for( var i = 0; i < this.id.length; i++ ){
            if( this.id[i] == pid ) {
                this.id[i] = qid;
            }
        }
    };
    exports.QuickFind = qf;
})(this);