class Task {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task);
        // post
        // fetch('https://xxx/xxxx/xxx').then(res => {
        //     alert('success!');
        // }).catch((err) => {
        //     alert('fail!');
        // })
    }

    removeTask(task) {
        this.tasks = this.tasks.filter(t => t !== task);
        console.log(task);
        // post
        // fetch('https://xxx/xxxx/xxx').then(res => {
        //     alert('success!');
        // }).catch((err) => {
        //     alert('fail!');
        // })
    }

    includes(task) {
        return this.tasks.includes(task);
    }

    getTask() {
        return [].concat(this.tasks);
    }
}