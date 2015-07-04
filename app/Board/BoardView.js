BoardView = Backbone.View.extend({

    tagName: 'li',

    events: {
        'click': 'doDestroy'
    },

    doDestroy: function() {
        this.model.destroy();
        this.remove();
    },

    initialize: function() {
        log('BoardView created');
    },

    render: function() {
        log('BoardView render');
        this.$el.html(
            this.model.get('id') + ': ' +
            this.model.get('name'));
        return this;
    }

});