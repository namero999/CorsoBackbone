TodoList = Backbone.Collection.extend({

    model: Todo,

    initialize: function() {
        log('TodoList created');
    },





    dones: function(){

        var result = this.where({done: true} );

        var collectionresult  = new TodoList(result);

        var totdone = collectionresult.size();

        return totdone;
    }



});