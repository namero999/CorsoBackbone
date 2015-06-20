Router = Backbone.Router.extend({

    routes: {
        '': 'main',
        'edit/:id': 'edit'
    },

    main: function() {

        new InputView({
            collection: todoList
        }).render();

        var todoTotView = new TodoTotView({
            collection: todoList
        });
        $body.append(todoTotView.render().el);

        var todoTotDoneView = new TodoTotDoneView({
            collection: todoList
        });
        $body.append(todoTotDoneView.render().$el);

        var todoListView = new TodoListView({
            collection: todoList
        });

        todoListView.render();

    },

    edit: function(id) {
        log('Route edit ' + id);

        log(todoList.get(id));

    }

});