TodoView = Backbone.View.extend({

    tagName: 'li',
    template: _.template($('#todoTemplate').text()),

    initialize: function() {
        log('TodoView created');
    },

    render: function() {
        this.$el.html(this.template(this.model.attributes));
        return this;
    }

});