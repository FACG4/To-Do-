var todoFunctions = {

  generateId: (function() {
    var idCounter = 0;

    function incrementCounter() {
      return (idCounter += 1);
    }

    return incrementCounter;
  })(),


  cloneArrayOfObjects: function(todos) {
    return todos.map(function(todo) {
      return JSON.parse(JSON.stringify(todo));
    });
  },

  addTodo: function(todos, newTodo, newDate) {
    var newToDos = this.cloneArrayOfObjects(todos);
    if (newTodo.trim() !== '') {
      newToDos.push({
        id: this.generateId(),
        description: newTodo,
        date: newDate,
        done: false,
      });
    } else {
      alert('please enter some text')
    }

    return this.sortTodos(newToDos);
  },


  deleteTodo: function(todos, idToDelete) {
    var newToDos = this.cloneArrayOfObjects(todos);
    return newToDos.filter(x => x.id != idToDelete)
  },

  editTodo: function(todos, idToMark, desc) {

    var newToDos = this.cloneArrayOfObjects(todos);

    var arr = newToDos.map(function(item) {
      if (item.id === idToMark) {
        item.description = desc;
      }
      return item;
    });
    return this.sortTodos(arr);
  },


  markTodo: function(todos, idToMark) {

    var newToDos = this.cloneArrayOfObjects(todos);

    var arr = newToDos.map(function(item) {
      if (item.id === idToMark) {
        item.done = !item.done;
      }
      return item;
    });
    return this.sortTodos(arr);
  },


  sortTodos: function(todos) {
    var sortedlist = this.cloneArrayOfObjects(todos);
    sortedlist = sortedlist.sort(function(a, b) {


      return (new Date(a.date) - new Date(b.date));
    })
    sortedlist = sortedlist.sort(function(a, b) {
      return a.done
    })
    return sortedlist

  },




};

if (typeof module !== 'undefined') {
  module.exports = todoFunctions;
}
