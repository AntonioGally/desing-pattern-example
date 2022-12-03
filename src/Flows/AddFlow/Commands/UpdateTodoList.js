export default class UpdateTodoList {
    constructor(newTodoList, setTodoList) {
        this.newTodoList = newTodoList;
        this.setTodoList = setTodoList;
    }

    execute() {
        this.setTodoList(this.newTodoList);
    }
}