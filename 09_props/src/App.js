import './App.css';
import PetInfo from './components/PetInfo';

function App() {
  return (
    <div className="App">
      <PetInfo animal="cat" age="5" />
      <PetInfo animal="dog" age="15" />
    </div>
  );
}

export default App;
