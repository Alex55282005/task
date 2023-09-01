import './App.css';
import Tree from './scripts/main';
import Tree2 from './scripts/main2';
import FormForData from './components/form';

function App() {
  return (
    <div className="App">
      <div id='container'>
        <Tree/>
        <Tree2/>
      </div>
      <FormForData/>
    </div>
  );
}

export default App;
