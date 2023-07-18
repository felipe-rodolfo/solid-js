const TaskStorage = require("./TaskStorage");

class FileStore extends TaskStorage {
    constructor(task){
        super();
        this.task = task;
    }

    save(){
        console.log(`saving task ${this.task.name} in file.`);
    }
}

module.exports = FileStore;
