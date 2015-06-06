TodoListView = Backbone.View.extend({

    tagName: 'ul',

    initialize: function() {
        log('TodoListView created');
    },

    render: function() {
        $('body').append(this.$el);
        return this;
    }

});