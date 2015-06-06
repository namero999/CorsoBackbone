TodoView = Backbone.View.extend({

    tagName: 'li',

    initialize: function() {
        log('TodoView created');
    },

    render: function() {
        this.$el.text(this.model.get('title'));
        return this;
    }

});