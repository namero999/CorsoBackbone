RicevutaView = Backbone.View.extend({

    tagName: 'tr',
    template: _.template($('#ricevutaTemplate').text()),

    initialize: function() {
        this.listenTo(this.model, 'change', this.render);
        log('RicevutaView created');
    },

    events: {
        //'click img.edit': 'onEdit',
        //'mouseover td': 'onToolShow',
        'mouseenter .description': 'onToolShow',
        'mouseleave   .description': 'onToolHide',
        'click   .toolbar-delete': 'onDelete'
    },

    onToolShow: function(e) {
        log('evento toolShow ');

        var ricevutaToolInLineView = new RicevutaToolInLineView({
            model: this.model
        });

        currentToolsView = ricevutaToolInLineView;

        this.$('.description').append(ricevutaToolInLineView.render().el);
    },
    onToolHide: function(e) {
        log('evento toolHiden ');

        currentToolsView.remove();

        log(e);
    },

    onDelete: function() {
        this.model.collection.remove(this.model);
        this.remove();
    },

    render: function() {
        this.$el.html(this.template(this.model.attributes));
        return this;
    }

});