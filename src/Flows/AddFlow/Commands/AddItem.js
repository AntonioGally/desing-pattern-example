export default class AddItem {
    constructor(itemToAdd, todoList) {
        this.itemToAdd = itemToAdd;
        this.todoList = todoList;
    }

    execute() {
        let copyOfTodos = this.todoList.slice()
        copyOfTodos.push(this.itemToAdd);
        return copyOfTodos;
    }
}