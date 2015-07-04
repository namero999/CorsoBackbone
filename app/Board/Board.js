Board = Backbone.Model.extend({

    initialize: function() {
        log('Board Model created');
    },

    parse: function(response, options) {
        response.name = "PREFIX - " + response.name;
        return response;
    }

});