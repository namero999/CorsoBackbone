BoardListView = Backbone.View.extend({

    tagName: 'ul',

    initialize: function() {
        this.listenTo(this.collection, 'reset', this.render);
        log('BoardListView created');
    },

    addBoard: function(model) {
        var boardView = new BoardView({model: model});
        this.$el.append(boardView.render().el);
    },

    render: function() {
        this.collection.each(this.addBoard, this);
        log('BoardListView render');
        return this;
    }

});