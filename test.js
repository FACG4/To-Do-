var test = require('tape');
var logic = require('./logic');

test('Example test', function(t) {
  t.pass();
  t.end();
});



test('addTodo function', function(t) {
  var todos = [];
  var actual = logic.addTodo(todos, "New todoo", '2018-03-02');
  var expected = [{
    id: 1,
    description: "New todoo",
    date: '2018-03-02',
    done: false
  }];
  t.deepEqual(actual, expected);
  t.end();
});


test('deleteTodo function', function(t) {
  var todos = [{
    id: 0,
    description: "todo1",
    done: false
  }];
  var actual = logic.deleteTodo(todos, 0);
  console.log(actual);
  var expected = [];
  t.deepEqual(actual, expected);
  t.end();
});

test('sort function ', function(any) {
  var todos = [];
  var actual = logic.sortTodos(todos);
  var expected = [];
  any.deepEqual(actual, expected);
  any.end();
});

test('sort function ', function(any) {
  var todos = [{
    id: 1,
    description: "todo1",
    date: "2018-01-01",
    done: false
  }];
  var actual = logic.sortTodos(todos);
  var expected = [{
    id: 1,
    description: "todo1",
    date: "2018-01-01",
    done: false
  }];
  any.deepEqual(actual, expected);

  any.end();
});

test('sort function ', function(any) {
  var todos = [{
    id: 1,
    description: "todo1",
    date: "2018-01-01",
    done: true
  }];
  var actual = logic.sortTodos(todos);
  var expected = [{
    id: 1,
    description: "todo1",
    date: "2018-01-01",
    done: true
  }];
  any.deepEqual(actual, expected);
  any.end();
});

test('sort function ', function(any) {
  var todos = [{
    id: 1,
    description: "todo1",
    date: "2018-01-01",
    done: false
  }, {
    id: 2,
    description: "todo2",
    date: "2018-02-01",
    done: false
  }];
  var actual = logic.sortTodos(todos);
  var expected = [{
    id: 1,
    description: "todo1",
    date: "2018-01-01",
    done: false
  }, {
    id: 2,
    description: "todo2",
    date: "2018-02-01",
    done: false
  }];
  any.deepEqual(actual, expected);
  any.end();
});

test('sort function ', function(any) {
  var todos = [{
    id: 2,
    description: "todo2",
    date: "2018-02-01",
    done: false
  }, {
    id: 1,
    description: "todo1",
    date: "2018-01-01",
    done: false
  }];
  var actual = logic.sortTodos(todos);
  var expected = [{
    id: 1,
    description: "todo1",
    date: "2018-01-01",
    done: false
  }, {
    id: 2,
    description: "todo2",
    date: "2018-02-01",
    done: false
  }];
  any.deepEqual(actual, expected);
  any.end();
});

test('sort function ', function(any) {
  var todos = [{
    id: 1,
    description: "todo1",
    date: "2018-01-01",
    done: false
  }, {
    id: 2,
    description: "todo2",
    date: "2018-01-01",
    done: true
  }];
  var actual = logic.sortTodos(todos);
  var expected = [{
    id: 1,
    description: "todo1",
    date: "2018-01-01",
    done: false
  }, {
    id: 2,
    description: "todo2",
    date: "2018-01-01",
    done: true
  }];
  any.deepEqual(actual, expected);
  any.end();
});

test('sort function ', function(any) {
  var todos = [{
    id: 2,
    description: "todo2",
    date: "2018-01-01",
    done: true
  }, {
    id: 1,
    description: "todo1",
    date: "2018-01-01",
    done: false
  }];
  var actual = logic.sortTodos(todos);
  var expected = [{
    id: 1,
    description: "todo1",
    date: "2018-01-01",
    done: false
  }, {
    id: 2,
    description: "todo2",
    date: "2018-01-01",
    done: true
  }];
  any.deepEqual(actual, expected);
  any.end();
});
test('sort function ', function(any) {
  var todos = [{
    id: 1,
    description: "todo1",
    date: "2018-01-01",
    done: true
  }, {
    id: 2,
    description: "todo2",
    date: "2018-01-01",
    done: false
  }];
  var actual = logic.sortTodos(todos);
  var expected = [{
    id: 2,
    description: "todo2",
    date: "2018-01-01",
    done: false
  }, {
    id: 1,
    description: "todo1",
    date: "2018-01-01",
    done: true
  }];
  any.deepEqual(actual, expected);
  any.end();
});
