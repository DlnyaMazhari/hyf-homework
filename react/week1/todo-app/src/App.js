import logo from "./logo.svg";
import "./App.css";
import Activities from "./activities";

const TodoList = [
  {
    task: "Get out of bed",
    deadlineDate: "Wed Sep 13 2017",
  },
  {
    task: "Brush teeth",
    deadlineDate: "Thu Sep 14 2017",
  },
  {
    task: "Eat breakfast",
    deadlineDate: "Fri Sep 15 2017",
  },
];

function App() {
  return (
    <div>
      <Activities TodoList={TodoList} />
    </div>
  );
}

export default App;
