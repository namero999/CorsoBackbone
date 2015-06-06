log = console.log.bind(console);

var todoList = new TodoList([
    {title: "Fare da mangiare", done: false},
    {title: "Pulire", done: false}
]);

new InputView({
    collection: todoList
}).render();

var todoListView = new TodoListView({
    collection: todoList
});

todoListView.render();

log('Application started');