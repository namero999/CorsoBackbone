log = console.log.bind(console);

var todo1 = new Todo({title: "Fare da mangiare", done: true});
todo1.set('title', 'Un altro titolo111');
todo1.set('done', true);

var todo2 = new Todo({title: "Pulire casa", done: false});
todo2.set('title', 'Un altro titolo222');

log('Application started');