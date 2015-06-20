Router = Backbone.Router.extend({

    routes: {
        '': 'main',
        'edit/:id': 'edit',
        'about': 'about'
    },

    about: function() {
        _.each(currentViews, function(view) {
            view.remove();
        });

        var aboutView = new AboutView();

        $('body').append(aboutView.render().el);

        currentViews = [aboutView];
    },

    main: function() {

        _.each(currentViews, function(view) {
            view.remove();
        });

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

        var todoListView = new TodoListView({
            collection: todoList
        });

        $('body').append(todoListView.render().el);

        currentViews = [inputView, todoTotView, todoTotDoneView, todoListView];

    },

    edit: function(id) {

        _.each(currentViews, function(view) {
            view.remove();
        });

        log('Route edit ' + id);

        var todoEditView = new TodoEditView({
            model: todoList.get(id)
        });

        $('body').append(todoEditView.render().el);

        currentViews = [todoEditView];

    }

});