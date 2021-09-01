import Layout from './components/Layout';
import { AssetsContextProvider } from 'context/assetsContext';
import './App.css';


function App() {
  return (
    <div className="App">
        <AssetsContextProvider>
          <Layout/>
        </AssetsContextProvider>
    </div>
  );
}

export default App;