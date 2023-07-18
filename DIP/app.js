const Task = require('./Task.js');
const TaskNotifierEmail = require('./TaskNotifierEmail.js');
const CloudStore = require('./CloudStore.js');

const firstTask = new Task('Task 1', 'a fast task', true);
const saveTask = new CloudStore(firstTask);
const TaskNotifierEmail = new TaskNotifierEmail(saveTask);