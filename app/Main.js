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
var boardView = new BoardView({
    collection: boards
});

boards.fetch({
    success: function() { log('boards loaded successfully'); },
    error: function() { log('error loading boards'); },
    reset: true
});

//boards.fetch({
//
//    success: function() {
//        log('Success! Boards in collection: ', boards.length);
//        var boardmodel = boards.at(1);
//        boardmodel.fetch({
//            success: function() {
//                log('Model loaded successfully');
//            }
//        });
//    },
//
//    error: function() {
//        log('Error :(');
//    }
//
//});