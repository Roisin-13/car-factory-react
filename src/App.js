import Car from './components/Car';
import './App.css';
// import Factory from './components/Factory';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          car factory
        </p>
      </header>
      {/* <Factory></Factory> */}
      <Car></Car>
    </div>
  );
}

export default App;
