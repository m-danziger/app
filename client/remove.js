async function taskRemove(btnRemove) {
  if (confirm("Are you sure to delete?") == true) {
    let id = btnRemove.parentNode.parentNode.getAttribute('data-task-id');

    let a = await fetch(`http://localhost:3000/tasks/${id}`, {
      method: 'DELETE'
    });
    if (a.ok) {
      let taskIndex = tasks.find((task) => Number(task.id).toString() === id);
      if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
      }
    }
  }
}

/*
async function taskRemove(btnRemove) {
  if (confirm("Are you sure to delete?")) {
    let id = btnRemove.parentNode.parentNode.getAttribute('data-task-id');
    
    try {
      let response = await fetch(`http://localhost:3000/tasks/${id}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        let taskIndex = tasks.find((task) => Number(task.id).toString() === id);
        if (taskIndex !== -1) {
          tasks.splice(taskIndex, 1);
        }
        displayTasks();
      } 
    } catch (error) {
      console.error('Error:', error);
    }
  }
}

*/