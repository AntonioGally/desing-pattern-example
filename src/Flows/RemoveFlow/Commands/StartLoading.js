export default class StartLoading {
    constructor (setLoading) {
        this.setLoading = setLoading;
    }

    execute() {
        this.setLoading(true);
    }
}