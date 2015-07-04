RicevutaNewView = Backbone.View.extend({

    //tagName: 'input',
    template: _.template($('#ricevutaNewTemplate').text()),

    initialize: function() {
        log('InputView created');
    },

    events: {
        'keypress': 'onEnter',
        'click button': 'onAdd'
    },

    //Corrado: la data di default deve essere quella attuale.
    onAdd: function(event) {
        //VOGLIO prendere i dati inseriti nei vari textbox
        //Al fine di aggiungerli nella collection passando un model - this.collection.add( { ... });
        // nota che el è un template

        //Quindi dovrei prelevare con jQuery il valore inserito in ogni text-box
        //Questo non so come farlo.

        //Dato che l'elemento è già selezionato   this.$el.  forse io non posso usare un selettore
        //forse dovrei usare un filtro o dovrei navigare nel dom

        var $description = this.$('#description').val();
        var $amount = this.$('#amount').val();
        var $date = this.$('#date').val();

        this.collection.add( {id: generateId(), descrizione: $description,  importo: $amount, date: $date} );

        log('Ricevuta aggiunta');

        //this.collection.add({description: this.$el.val(), id: generateId(), importo: event.target.t,});
        // this.$el.val('');
        /*
        log(step0);

        log('step01');



        $textbox = this.$el.html();
        log($textbox);
        log('step02');

        textbox0 = $textbox.html();
/*
        var textbox0 = this.$el.filter( function() {
            return ($(this).children().eq(1).text() == "Technology");
        }).css

            */
        ///////textbox0 = $textbox.find("#description").val();
        //var textbox0 = jQuery(textbox).find("#description").val();

        //var textbox0 = this.$el.html().find("#description").val();

        //var textbox0 = this.$el.filter(".description").val();
       // log(textbox0);




        //textbox = $(textbox).$("#description").val();
        //log(textbox);

       // var textbox2 = this.$el.filter(".description").val();
        //log('step03');

        //textbox = this.$el.html().getElementById("description");


        //log(textbox2);
      //  {descrizione: "Spese acqua", id: generateId() , importo: "300,50", date: "01/30/2015"},

            //this.collection.add({description: this.$el.val(), id: generateId(), importo: event.target.t,});
           // this.$el.val('');
       // log('step03');
    },

    onEnter: function(event) {
        if (event.keyCode == 13) {
            this.collection.add({title: this.$el.val(), done: false, id: generateId()});
            this.$el.val('');
        }
    },

    render: function() {
        //$('body').append(this.el);
        this.$el.html(this.template());
        return this;
    }

});