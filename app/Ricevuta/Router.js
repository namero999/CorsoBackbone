Router = Backbone.Router.extend({

    routes: {
        '': 'main',
        'toolshow/:id': 'toolShow',
        'toolhide/:id': 'toolHide'
    },

    main: function() {
        log('Sono in Router rotta Main');

        _.each(currentViews, function(view) {
            view.remove();
        });

        var inputView = new RicevutaNewView({
            collection: ricevutaListCollection
        }).render();

        $('.columnCenter').append(inputView.render().el);

        var ricevutaListView = new RicevutaListView({
            collection: ricevutaListCollection
        });

        //$('body').append(ricevutaListView.render().el);
        $('.columnCenter').append(ricevutaListView.render().el);

        currentViews = [inputView, ricevutaListView];

        // currentViews = [inputView, todoTotView, todoTotDoneView, todoListView];
        $('#myModal').modal('show')

    },

    toolShow: function(id) {
        _.each(currentViews, function(view) {
            view.remove();
        });

        log('Route edit ' + id);

        var ricevutaToolInLineView = new RicevutaToolInLineView({
            model: ricevutaListCollection.get(id)
        });

        $('.description').append(ricevutaToolInLineView.render().el);

        currentViews = [ricevutaToolInLineView];

    }
/*
    toolHide: function(id) {

        log('Route edit ' + id);


        var ricevutaToolInLineView = new RicevutaToolInLineView({
            model: ricevutaListCollection.get(id)
        });

        $('.description').append(ricevutaToolInLineView.render().el);

        //currentViews = [todoEditView];

    }
*/


});