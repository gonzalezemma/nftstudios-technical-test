
import { useEffect, useState } from 'react';
import { map } from 'lodash';
import getNtfs from './service/nfts';
import './App.css';


function App() {
  const [ntfs, setNtfs] = useState([])

  useEffect(() => {
    getNtfs().then(res => setNtfs(res.assets));
  }, [])
  
  return (
    <div className="App">
      <div className="NtfsList">
        {map(ntfs, ntf => (
          <div key={ntf.id} className="NtfsList-item"> 
              <img src={ntf.image_preview_url} alt={ntf.name}/>
              <h6>{ntf.name}</h6>
          </div>
        ))}
        </div>
    </div>
  );
}

export default App;
