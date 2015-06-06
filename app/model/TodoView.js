TodoView = Backbone.View.extend({

    tagName: 'li',
    template: _.template($('#todoTemplate').text()),

    initialize: function() {
        this.listenTo(this.model, 'change', this.render);
        log('TodoView created');
    },

    events: {
        'change input': 'onDone'
    },

    onDone: function(e) {
        this.model.set('done', e.target.checked);
    },

    render: function() {
        this.$el.html(this.template(this.model.attributes));
        return this;
    }

});