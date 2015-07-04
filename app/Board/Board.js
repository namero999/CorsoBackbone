Board = Backbone.Model.extend({

    initialize: function() {
        log('Board Model created');
    }

});

Boards = Backbone.Collection.extend({

    model: Board,

    initialize: function() {
        log('Board Collection created');
    },

    url: 'http://board.creonomy.com/api/boards'

});

var boards = new Boards(); // Creo una collection
boards.fetch({

    success: function() {
        log('Success! Boards in collection: ', boards.length);
        var boardmodel = boards.at(1);
        boardmodel.fetch({
            success: function() {
                log('Model loaded successfully');
            }
        });
    },

    error: function() {
        log('Error :(');
    }

});