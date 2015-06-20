TodoTotView = Backbone.View.extend({

    tagName: 'p',

    initialize: function() {
        log('TodoTotView created');

        this.listenTo(this.collection, 'add remove', this.render);
    },

    render: function() {
        log('TodoTotView Render Start');

        this.$el.text('Tot: ' + this.collection.length);

        return this;
    }

});