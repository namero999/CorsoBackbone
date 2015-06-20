log = console.log.bind(console);
$body = $('body');

log('Application started');

var todoList = new TodoList([
    {title: "Fare da mangiare", done: false},
    {title: "Pulire", done: true}
]);

new InputView({
    collection: todoList
}).render();

var todoListView = new TodoListView({
    collection: todoList
});

todoListView.render();

//Tot. Todo in Collection
var todoTotView = new TodoTotView({
    collection: todoList
});
$body.append(todoTotView.render().el);

//Tot. Todo Done in Collection
var todoTotDoneView = new TodoTotDoneView({
    collection: todoList
});
$body.append(todoTotDoneView.render().$el);

log('Application End');