TodoTotDoneView = Backbone.View.extend({

    tagName: 'p',
    //template: _.template($('#todoTemplate').text()),

    initialize: function() {
        log('TodoTotView created');

        //this.listenTo(this.collection, 'add', this.render); // Secondo modo

        //SEMBRA NON FUNZIONARE - come faccio a passare il modello?
        // Dovrei istanziarne uno nuovo

        //new TodoView({'model': Todo } );

        this.listenTo( this.model, 'change', this.render ); // Secondo modo

    },

    render: function() {
        log('TodoTotView Render Start');

        var totdones = this.collection.dones();

        /*
                var result = this.collection.where({done: true} );

                var collectionresult  = new TodoList(result);

                var totdone = collectionresult.size();

                this.$el.text(  totdone );
        */
        //this.$el.text(  this.collection.where({done: true} );

        //var resultCollection = new InvoiceItemCollection(result);


        this.$el.text(  totdones );

        $('body').append(this.$el);
        log('TodoTotView Render End');

        return this;
    }

});



