const tasks = {
  taskList: [
    {
      text: 'task 1',
      completed: true,
    },
    {
      text: 'task 2',
      completed: false,
    },
    {
      text: 'task 3',
      completed: false,
    },
  ],
  getTasksToDo() {
    return this.taskList.filter(el => el.completed === false);
  }
}

console.log(tasks.getTasksToDo());