import './App.css';
import RandomNumber from './components/RandomNumber';

function App() {
  return (
    <div className="App">
      <RandomNumber min={0} max={5} />
    </div>
  );
}

export default App;
