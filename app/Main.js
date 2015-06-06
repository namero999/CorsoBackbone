log = console.log.bind(console);

var todo = new Todo({title: "Fare da mangiare", done: false});

var todoList = new TodoList([
    {title: "Fare da mangiare", done: false},
    {title: "Pulire", done: false}
]);



log('Application started');