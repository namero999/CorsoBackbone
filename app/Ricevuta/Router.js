Router = Backbone.Router.extend({

    routes: {
        '': 'main'
    },

    main: function() {
        log('Sono in Router rotta Main');

        _.each(currentViews, function(view) {
            view.remove();
        });
/*
        var inputView = new InputView({
            collection: todoList
        }).render();

        var todoTotView = new TodoTotView({
            collection: todoList
        });
        $body.append(todoTotView.render().el);

        var todoTotDoneView = new TodoTotDoneView({
            collection: todoList
        });
        $body.append(todoTotDoneView.render().el);
*/
        var inputView = new RicevutaNewView({
            collection: ricevutaListCollection
        }).render();

        $('body').append(inputView.render().el);

        var ricevutaListView = new RicevutaListView({
            collection: ricevutaListCollection
        });

        $('body').append(ricevutaListView.render().el);

       // currentViews = [inputView, todoTotView, todoTotDoneView, todoListView];

    }



});