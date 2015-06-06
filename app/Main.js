log = console.log.bind(console);

$(function() {

    var todoList = new TodoList([
        {title: "Fare da mangiare", done: false},
        {title: "Pulire", done: false}
    ]);

    var todoListView = new TodoListView({
        collection: todoList
    });

    todoListView.render();

    log('Application started');

});