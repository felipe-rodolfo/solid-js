const TaskStorage = require("./TaskStorage");

class CloudStore extends TaskStorage {
    constructor(task){
        super();
        this.task = task;
    }

    save(){
        console.log(`saving task ${this.task.name} in cloud`);
    }
}

module.exports = CloudStore;
