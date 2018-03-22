var logic = todoFunctions;

(function() {

  var state = [];

  var container = document.getElementById('todo-container');
  var addTodoForm = document.getElementById('add-todo');




  if (localStorage.getItem("state")) {
    state = JSON.parse(localStorage.getItem("state"))

  }


  var createTodoNode = function(todo) {

    var todoNode = document.createElement('li');

    var descriptionSpan = document.createElement('input');
    var dateSpan = document.createElement('span');

    descriptionSpan.className = ('spanDesc');
    dateSpan.className = ('spanDat');

    descriptionSpan.value = todo.description
    descriptionSpan.disabled = 'disabled'
    descriptionSpan.style.border = 'none'
    dateSpan.textContent = todo.date;

    if (todo.done) {
      descriptionSpan.style.textDecoration = 'line-through';
      dateSpan.style.textDecoration = 'line-through';

    }
    todoNode.appendChild(descriptionSpan);
    todoNode.appendChild(dateSpan);




    var deleteButtonNode = document.createElement('button');
    deleteButtonNode.addEventListener('click', function(event) {
      var newState = logic.deleteTodo(state, todo.id);
      update(newState);
    });
    deleteButtonNode.textContent = ''
    deleteButtonNode.className = 'button1';

    todoNode.appendChild(deleteButtonNode);


    var editButtonNode = document.createElement('button');

    editButtonNode.addEventListener('click', function(event) {
      event.preventDefault()

      if (descriptionSpan.disabled == true) {
        console.log(1);
        descriptionSpan.disabled = !descriptionSpan.disabled


      } else {
        descriptionSpan.disabled = !descriptionSpan.disabled
        var descript = descriptionSpan.value;
        var dat = dateSpan.textContent;
        var newState = logic.deleteTodo(state, todo.id);
        update(newState)

        newState = logic.addTodo(state, descript, dat)
        newState = update(newState)
        sortTodo(newState)


      }






    });
    editButtonNode.textContent = ''
    editButtonNode.className = 'button1';
    todoNode.appendChild(editButtonNode);
    var nodeedit = document.createElement("i");
    nodeedit.className = ('fas fa-pencil-alt');
    editButtonNode.appendChild(nodeedit);







    var markButtonNode = document.createElement('button');
    markButtonNode.textContent = ''
    markButtonNode.className = 'button2';
    var nodee = document.createElement("i");
    nodee.className = ('fas fa-trash-alt');
    deleteButtonNode.appendChild(nodee);
    var nodeee = document.createElement("i");
    nodeee.className = ('fas fa-check');
    markButtonNode.appendChild(nodeee);





    todoNode.appendChild(markButtonNode);

    markButtonNode.addEventListener('click', function(event) {
      var newState = logic.markTodo(state, todo.id);
      update(newState);
    });


    // add classes for css
    return todoNode;
  };

  if (addTodoForm) {
    addTodoForm.addEventListener('submit', function(event) {

      event.preventDefault();
      var description = document.getElementById('description').value;
      var date = document.getElementById('date').value;

      var newState = logic.addTodo(state, description, date);
      document.getElementById('description').value = '';
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
