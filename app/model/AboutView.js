AboutView = Backbone.View.extend({

    template: _.template($('#aboutTemplate').text()),

    render: function() {
        this.$el.html(this.template());
        return this;
    }

});