import Assets from './components/Nfts/Assets';
import { AssetsContextProvider } from 'context/assetsContext';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <AssetsContextProvider>
        <Assets/>
      </AssetsContextProvider>
    </div>
  );
}

export default App;
