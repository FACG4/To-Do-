var test = require('tape');
var logic = require('./logic');

test('Example test', function(t) {
  t.pass();
  t.end();
});



// addTodo test
test('addTodo function', function(t) {
var todos = [];
var actual = logic.addTodo(todos,"New todoo", '2018-03-02');
var expected=[{id:1,description:"New todoo",date:'2018-03-02',done: false}];
t.deepEqual(actual, expected);
t.end();
});


// deleteTodo function
test('deleteTodo function', function(t) {
var todos = [{id:0, description:"todo1", done:false}];

var actual = logic.deleteTodo(todos,0);
console.log(actual);
var expected=[];
t.deepEqual(actual, expected);
// t.deepEqual(todos, expected);

t.end();
});
