BoardView = Backbone.View.extend({

    initialize: function() {
        this.listenTo(this.collection, 'reset', this.render);
        log('BoardView created');
    },

    render: function() {
        log('BoardView render');
        return this;
    }

});