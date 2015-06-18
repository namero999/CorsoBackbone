log = console.log.bind(console);

log('Application started');

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

//Tot. Todo in Collection
new TodoTotView({
    collection: todoList
}).render();

//Tot. Todo Done in Collection
new TodoTotDoneView({
    collection: todoList
}).render();


log('Application End');