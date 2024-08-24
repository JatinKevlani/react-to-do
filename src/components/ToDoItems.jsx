import ToDoItem from "./ToDoItem";

function ToDoItems() {
  const tasksJSON = localStorage.getItem("tasks");

  if (!tasksJSON) {
    return <h1>No task to do!</h1>;
  } else {
    const tasks = JSON.parse(tasksJSON);

    return (
      <>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <ToDoItem tasks={tasks} />
        </tbody>
      </>
    );
  }
}

export default ToDoItems;
