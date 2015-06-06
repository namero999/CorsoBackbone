TodoList = Backbone.Collection.extend({

    model: Todo,

    initialize: function() {
        this.on('add', this.onAdd);
        this.on('remove', this.onRemove);
        log('TodoList created');
    },

    onAdd: function(model) {
        log('OnAdd invocata');
    },

    onRemove: function(model) {
        log('OnRemove invocata');
    }

});