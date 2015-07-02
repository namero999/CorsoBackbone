RicevutaView = Backbone.View.extend({

    tagName: 'li',
    template: _.template($('#ricevutaTemplate').text()),

    initialize: function() {
        this.listenTo(this.model, 'change', this.render);
        log('TodoView created');
    },

    events: {
        'change input': 'onDone',
        'click img.delete': 'onDelete',
        'click img.edit': 'onEdit'
    },

    onEdit: function() {
        router.navigate('edit/' + this.model.id, {trigger: true});
    },

    onDelete: function() {
        this.model.collection.remove(this.model);
        this.remove();
    },

    onDone: function(e) {
        this.model.set('done', e.target.checked);
    },

    render: function() {
        this.$el.html(this.template(this.model.attributes));
        return this;
    }

});