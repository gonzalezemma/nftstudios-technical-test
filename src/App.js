
import './App.css';
import getNtfs from './service/nfts';

getNtfs().then(res => console.log(res.assets));

function App() {
  return (
    <div className="App">
        
    </div>
  );
}

export default App;
