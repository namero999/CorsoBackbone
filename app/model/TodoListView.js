TodoListView = Backbone.View.extend({

    tagName: 'ul',

    initialize: function() {
        this.listenTo(this.collection, 'add', this.onAdd);
        log('TodoListView created');
    },

    onAdd: function(model) {
        var todoView = new TodoView({model: model});
        this.$el.prepend(todoView.render().el);
        log('Nella TotoListView - chiamo todoView.render().el');
    },

    render: function() {

        this.collection.each(function(model) {
            this.onAdd(model);
        }, this);

        return this;

    }

});