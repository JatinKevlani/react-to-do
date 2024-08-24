function ToDoItem({ tasks }) {
  return (
    <>
      {tasks.map((task, index) => (
        <tr key={index}>
          <td>{task.taskTitle}</td>
          <td>{task.taskDesc}</td>
        </tr>
      ))}
    </>
  );
}

export default ToDoItem;
