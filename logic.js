// Part 1. Fill in any missing parts of the todoFunction object!
// you can access these on todo.todoFunctions
// For part one we expect you to use tdd

var todoFunctions = {
  // todoFunctions.generateId() will give you a unique id
  // You do not need to understand the implementation of this function.
  generateId: (function() {
    var idCounter = 0;

    function incrementCounter() {
      return (idCounter += 1);
    }

    return incrementCounter;
  })(),

  //cloneArrayOfObjects will create a copy of the todos array
  //changes to the new array don't affect the original
  cloneArrayOfObjects: function(todos) {
    return todos.map(function(todo){
      return JSON.parse(JSON.stringify(todo));
    });
  },

  addTodo: function(todos, newTodo) {
var newToDos = todoFunctions.cloneArrayOfObjects(todos);
newToDos.push({
       id: generateId(),
       description: newTodo.description,
       done: false,
});
return newToDos;
  },







  deleteTodo: function(todos, idToDelete) {
    var newToDos = todoFunctions.cloneArrayOfObjects(todos);

for(let i=0; i<=todos.length ; i++)
{
if(i===idToDelete)
{ newToDos.slice(idToDelete,1);}
}

return newToDos;
  },













  markTodo: function(todos, idToMark) {
    // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
    // in the new todo array, all elements will remain unchanged except the one with id: idToMark
    // this element will have its done value toggled
    // hint: array.map
    var newToDos = todoFunctions.cloneArrayOfObjects(todos);

 var arr = newToDos.map(function(thisID) {
   if (thisID.id === idToMark){
     return thisID.done =! thisID.done;
   }
 });
return arr;
  },
















  sortTodos: function(todos, sortFunction) {
    // stretch goal! Do this last
    // should leave the input arguement todos unchanged (you can use cloneArrayOfObjects)
    // sortFunction will have same signature as the sort function in array.sort
    // hint: array.slice, array.sort
  },
};


// Why is this if statement necessary?
// The answer has something to do with needing to run code both in the browser and in Node.js
// See this article for more details:
// http://www.matteoagosti.com/blog/2013/02/24/writing-javascript-modules-for-both-browser-and-node/
if (typeof module !== 'undefined') {
  module.exports = todoFunctions;
}