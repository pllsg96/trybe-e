import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const thingsToDo = ['Academia', 'Crossfit', 'Estudar', 'Trabalho', 'Dormir'];

function App() {
  return (
    thingsToDo.map((thing) => Task(thing))
  );
}

export default App;
