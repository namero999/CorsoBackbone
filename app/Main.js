log = console.log.bind(console);
$body = $('body');

log('Application started');

var todoList = new TodoList([
    {title: "Fare da mangiare", done: false, id: generateId()},
    {title: "Pulire", done: true, id: generateId()}
]);

var router = new Router();
Backbone.history.start({pushState: false});

log('Application End');