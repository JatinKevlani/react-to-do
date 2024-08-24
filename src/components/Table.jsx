import ToDoItems from "./ToDoItems";

function Table() {
  return (
    <>
      <h1>Tasks</h1>
      <table border="1px">
        <ToDoItems></ToDoItems>
      </table>
    </>
  );
}

export default Table;