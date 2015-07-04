log = console.log.bind(console);
$body = $('body');

log('Application started');

var todoList = new TodoList([
    {title: "Fare da mangiare", done: false, id: generateId()},
    {title: "Pulire", done: true, id: generateId()}
]);

var router = new Router();
Backbone.history.start({pushState: false});

log('Todo - Application End');

var boards = new Boards();
var boardListView = new BoardListView({
    collection: boards
});

boards.fetch({
    success: function() {

        $body.append(boardListView.el);

    },
    error: function() {
        $body.append("<div>Errore nel caricare la lista dei board</div>");
        //alert("Qualcosa e' andato storto..");
    },
    reset: true
});