BoardView = Backbone.View.extend({

    tagName: 'li',

    initialize: function() {
        log('BoardView created');
    },

    render: function() {
        log('BoardView render');
        this.$el.text(
            this.model.get('id') + ': ' +
            this.model.get('name'));
        return this;
    }

});