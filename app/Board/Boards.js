Boards = Backbone.Collection.extend({

    model: Board,

    initialize: function() {
        log('Board Collection created');
    },

    url: 'http://board.creonomy.com/api/boards'

});