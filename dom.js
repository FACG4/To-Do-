var logic = todoFunctions;



(function() {

  var state = [];

  var container = document.getElementById('todo-container');
  var addTodoForm = document.getElementById('add-todo');





  if (localStorage.getItem("state") === null) {
    state = []


  } else {
    state = JSON.parse(localStorage.getItem("state"))
  }



  var createTodoNode = function(todo) {

    var todoNode = document.createElement('li');


    var span = document.createElement('span');
    var span2 = document.createElement('span');

    span.className = ('span1');
    span2.className = ('span2');

    span.textContent = todo.description;
    span2.textContent = todo.date;

    if (todo.done) {
      span.style.textDecoration = 'line-through';
      span2.style.textDecoration = 'line-through';

    }
    todoNode.appendChild(span);
    todoNode.appendChild(span2);




    var deleteButtonNode = document.createElement('button');
    deleteButtonNode.addEventListener('click', function(event) {
      var newState = logic.deleteTodo(state, todo.id);
      update(newState);
    });
    deleteButtonNode.textContent = 'Delete'
    deleteButtonNode.className = ('button1');

    todoNode.appendChild(deleteButtonNode);


    var markButtonNode = document.createElement('button');
    markButtonNode.textContent = 'Mark'
    markButtonNode.className = ('button2');

    todoNode.appendChild(markButtonNode);

    markButtonNode.addEventListener('click', function(event) {
      var newState = logic.markTodo(state, todo.id);
      update(newState);
    });


    return todoNode;
  };

  if (addTodoForm) {
    addTodoForm.addEventListener('submit', function(event) {
  
        event.preventDefault();
      var description = document.getElementById('description').value;
      var date = document.getElementById('date').value;

      var newState = logic.addTodo(state, description, date);
      update(newState);
    });
  }

  var update = function(newState) {
    state = newState;
    renderState(state);
  };

  var renderState = function(state) {
    var todoListNode = document.createElement('ul');


    state.forEach(function(todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });


    localStorage.setItem("state", JSON.stringify(state));


    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);
})();
