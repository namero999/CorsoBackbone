RicevutaToolInLineView = Backbone.View.extend({

   // tagName: 'p',
    template: _.template($('#toolsTemplate').text()),

    initialize: function() {
        this.listenTo(this.model, 'change', this.render);
        log('ToolsBar created');
    },

    events: {
        'change input': 'onDone',
        'click img.delete': 'onDelete'
        //'click img.edit': 'onEdit',
       // 'mouseover td': 'onEditInLine'

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
        log('ToolsBar rendered');

        this.$el.html(this.template());
        return this;
    }

});