Todo = Backbone.Model.extend({

    initialize: function() {
        this.on('change', this.onChange);
        log('Todo created. Title: ' + this.get('title'));
    },

    onChange: function() {
        log('Todo changed. Title: ' + this.get('title'));
    }

});