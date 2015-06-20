TodoTotDoneView = Backbone.View.extend({

    tagName: 'p',

    initialize: function() {
        log('TodoTotView created');

        this.listenTo(this.collection, 'change add remove', this.render);
    },

    render: function() {
        log('TodoTotView Render Start');

        var totdones = this.collection.where({done: true}).length;

        this.$el.text('Done: ' + totdones);

        return this;
    }

});