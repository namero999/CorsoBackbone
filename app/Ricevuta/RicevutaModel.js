RicevutaModel = Backbone.Model.extend({

    initialize: function() {
        this.on('change', this.onChange);
        log('RicevutaModel created. Description: ' + this.get('descrizione'));
    },

    onChange: function() {
        log('Ricevuta changed. Title: ' + this.get('description'));
    }

});