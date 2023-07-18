class TaskNotifierEmail extends TaskNotifier{

    constructor(task){
        this.task = task;
    }

    notifier(){
        console.log(`notifying via email`);
    }
}

module.exports = TaskNotifierEmail;