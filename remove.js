function taskRemove(btnRemove) {
    if (confirm("Are you sure to delete?") == true){
    let id = btnRemove.parentNode.parentNode.getAttribute('data-task-id');
    tasks.splice(id, 1);
    displayTasks();
    }
  }
