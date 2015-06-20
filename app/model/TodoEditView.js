TodoEditView = Backbone.View.extend({

    tagName: 'input',
    className: 'pippo',

    initialize: function() {
        log('TodoEditView initialize');
    },

    events: {
        'keypress': 'onEnter'
    },

    onEnter: function(event) {
        if (event.keyCode == 13) {
            this.model.set('title', this.$el.val());
            router.navigate('', {trigger: true});
        }
    },

    render: function() {
        log('TodoEditView render');
        this.$el.val(this.model.attributes.title);
        return this;
    }

});