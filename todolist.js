class TodoList {
  static ID_COUNT = 1;
  constructor() {
    this.todos = new Map();
  }

  addTodo(text) {
    this.todos.set(TodoList.ID_COUNT++, new Todo(text));
  }

  deleteTodo(id) {
    this.todos.delete(id);
  }

  modifyTodo(id, text) {
    this.todos.get(id).text = text;
  }

  toggleTodo(id) {
    this.todos.get(id).toggleComplete();
  }

  printTodoList() {
    for (let [id, todo] of this.todos) {
      console.log(`${id}: ${todo.text} [${todo.isCompleted ? "✅" : "  "}]`);
    }
    console.log();
  }
}

class Todo {
  constructor(text) {
    this.text = text;
    this.isCompleted = false;
  }

  toggleComplete() {
    this.isCompleted = !this.isCompleted;
  }
}

const todolist = new TodoList();

todolist.addTodo("자바스크립트 공부");
todolist.addTodo("운동하기");
todolist.printTodoList();

todolist.toggleTodo(1);
todolist.printTodoList();

todolist.modifyTodo(2, "매일 아침 운동하기");
todolist.printTodoList();

todolist.deleteTodo(1);
todolist.printTodoList();
