import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';

const texts = ['Click me', 'Hit me', 'Click me please', 'Press me'];

function App() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
    console.log(count);
  };
  return (
    <div className="App">
      <Counter count={count} />
      {texts.map((text, index) => {
        return <Button onClick={incrementCount} text={text} key={index} />;
      })}
    </div>
  );
}

export default App;
