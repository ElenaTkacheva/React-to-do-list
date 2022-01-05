
import './App.css';
import image from './photo.jpg';
import { ToDo } from './ToDo';

function App() {
  return (
    <div className="app">
      <div className="container">
        <img src={image} width="500px" alt="list" />
      </div>
      <div className="container">
        <h1>TO-DO LIST</h1>
      </div>
      <div className="container">
        <ToDo />
      </div>
    </div>
  );
}

export default App;
