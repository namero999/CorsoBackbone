TodoTotView = Backbone.View.extend({

    tagName: 'p',
    //template: _.template($('#todoTemplate').text()),

    initialize: function() {
        log('TodoTotView created');

        this.listenTo(this.collection, 'add', this.render); // Secondo modo
    },

    render: function() {
        log('TodoTotView Render Start');

        this.$el.text(  this.collection.length );

        $('body').append(this.$el);

        return this;
    }

});