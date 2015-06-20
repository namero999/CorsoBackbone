TodoEditView = Backbone.View.extend({

    tagName: 'input',
    className: 'pippo',

    initialize: function() {
        log('TodoEditView initialize');
    },

    render: function() {
        log('TodoEditView render');
        this.$el.val(this.model.attributes.title);
        return this;
    }

});