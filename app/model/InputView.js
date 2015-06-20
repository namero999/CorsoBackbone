InputView = Backbone.View.extend({

    tagName: 'input',

    initialize: function() {
        log('InputView created');
    },

    events: {
        'keypress': 'onEnter'
    },

    onEnter: function(event) {
        if (event.keyCode == 13) {
            this.collection.add({title: this.$el.val(), done: false, id: generateId()});
            this.$el.val('');
        }
    },

    render: function() {
        $('body').append(this.el);
        return this;
    }

});