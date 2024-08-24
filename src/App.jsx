import Navbar from "./components/Navbar";
import Table from "./components/Table";

function App() {
  let tasks = [
    {
      taskTitle: 'First task',
      taskDesc: 'Complete your first task'
    },
    {
      taskTitle: 'Second task',
      taskDesc: 'Complete your second task'
    }
  ];
  localStorage.setItem("tasks", JSON.stringify(tasks));
  return(
    <>
      <Navbar></Navbar>
      <Table></Table>
    </>
  );
}

export default App;