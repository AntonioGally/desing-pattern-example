export default class RemoveItem {
    constructor(itemToRemove, todoList) {
        this.itemToRemove = itemToRemove;
        this.todoList = todoList;
    }

    execute() {
        return this.todoList.filter(todo => todo !== this.itemToRemove);
    }
}