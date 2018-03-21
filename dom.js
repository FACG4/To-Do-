var logic = todoFunctions;
// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application

///our code
// var description = document.getElementById('description').value;
// var date = document.getElementById('date').value;


(function() {

var state=[];

  // This is the dom node where we will keep our todo
  var container = document.getElementById('todo-container');
  var addTodoForm = document.getElementById('add-todo');



    // { id: -3, description: 'first todo' },
    // { id: -2, description: 'second todo' },
    // { id: -1, description: 'third todo' },
   // this is our initial todoList


  if (!localStorage.getItem("state")  === null) {
      // Code for localStorage/sessionStorage.
      state = JSON.parse(localStorage.getItem("state"))

  //     //4.1.2

}



  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function(todo) {

    var todoNode = document.createElement('li');

    // addTodoForm.addEventListener('submit', function(event){
    //   event.preventDefault();
    //   // logic.addTodo(state, description);
    //   //console.log(description)
    //
    // });

    // add span holding description
    var span = document.createElement('span');
    var span2 = document.createElement('span');

     span.className = ('span1');
     span2.className = ('span2');

    span.textContent = todo.description ;
    span2.textContent =  todo.date;

    if(todo.done){
      span.style.textDecoration = 'line-through';
      span2.style.textDecoration = 'line-through';

    }
    todoNode.appendChild(span);
    todoNode.appendChild(span2);




    // this adds the delete button
    var deleteButtonNode = document.createElement('button');
    deleteButtonNode.addEventListener('click', function(event) {
      var newState = logic.deleteTodo(state, todo.id);
      update(newState);
    });
    deleteButtonNode.textContent = 'Delete'
    deleteButtonNode.className = ('button1');
    // deleteButtonNode.style.color= 'red'

    todoNode.appendChild(deleteButtonNode);

    // add markTodo button

    var markButtonNode = document.createElement('button');
    markButtonNode.textContent = 'Mark'
  markButtonNode.className = ('button2');

    // markButtonNode.style.color= 'red'
    todoNode.appendChild(markButtonNode);

    markButtonNode.addEventListener('click', function(event) {
      var newState = logic.markTodo(state, todo.id);
      update(newState);
    });


    // add classes for css
    return todoNode;
  };

  // bind create todo form
  if (addTodoForm) {
    addTodoForm.addEventListener('submit', function(event) {
      // https://developer.mozilla.org/en-US/docs/Web/Events/submit
      // what does event.preventDefault do?
      // what is inside event.target?
      event.preventDefault();
      var description = document.getElementById('description').value; // event.target ....
      var date = document.getElementById('date').value;

      // hint: todoFunctions.addTodo
      var newState = logic.addTodo(state, description, date); // ?? change this!
      // console.log(newState)
      update(newState);
    });
  }

  // you should not need to change this function
  var update = function(newState) {
    state = newState;
    renderState(state);
  };

  // you do not need to change this function
  var renderState = function(state) {
    var todoListNode = document.createElement('ul');


    state.forEach(function(todo){
      todoListNode.appendChild(createTodoNode(todo));
    });

    //localStorage
    localStorage.setItem("state", JSON.stringify(state));
    //localStorage

    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);
})();
