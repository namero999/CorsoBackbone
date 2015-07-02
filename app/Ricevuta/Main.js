log = console.log.bind(console);
//$body = $('body');

log('Application Main started');

var ricevutaListCollection = new RicevutaListCollection([
    {descrizione: "Spese acqua", id: generateId() , importo: "300,50", date: "01/30/2015"},
    {descrizione: "Spese luce",  id: generateId() , importo: "100,20", date: "02/28/2015"},
]);

/*
var todoList = new TodoList([
    {title: "Fare da mangiare", done: false, id: generateId()},
    {title: "Pulire", done: true, id: generateId()}
]);
 */
var router = new Router();
Backbone.history.start({pushState: false});

log('Application Main End');