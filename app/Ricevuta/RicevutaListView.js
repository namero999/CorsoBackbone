RicevutaListView = Backbone.View.extend({

    //tagName: 'ul',
    tagName: 'table', //credo che dovrei fare un template che contiene la tabella
    template: _.template($('#ricevutaTable').text()),
    className: "table table-striped",

    initialize: function() {
        this.listenTo(this.collection, 'add', this.onAdd);
        log('RicevutaListView created');
    },

    onAdd: function(model) {
        var ricevutaView = new RicevutaView({model: model});
        this.$el.prepend(ricevutaView.render().el);
        log('Nella TotoListView - chiamo todoView.render().el');
    },

    render: function() {
        this.$el.html(this.template());

        this.collection.each(function(model) {
            this.onAdd(model);
        }, this);

        return this;
    }

});