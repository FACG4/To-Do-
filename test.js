var test = require('tape');
var logic = require('./logic');

test('Example test', function(t) {
  t.pass();
  t.end();
});



test('addTodo', function(t) {
  var todos = [];
  var  actual =   logic.addTodo(todos,"New todoo");
  var expected=[{id:1,description:'New todoNode',done: false}];
  t.deepEqual(actual, expected);
  t.end();
});
