import React,  { useEffect, useState } from 'react';
import { map, set } from 'lodash';
import getNtfs from '../../service/nfts';
import './Nfts.css';

const Nfts = () => {
    const [ntfs, setNtfs] = useState([]);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getNtfs({page}).then(res => {
            setNtfs(res.assets);
            setLoading(false);
        });
    }, [page])
    
    const handleClick = () => {
        setPage(prevPage => prevPage + 1)
    }

    return (
        <>
            {loading ? 
                'Loading...' :
                <div className="NtfsList">
                    {map(ntfs, ntf => (
                        <div key={ntf.id} className="NtfsList-item"> 
                            <img src={ntf.image_preview_url} alt={ntf.name}/>
                            <h6>{ntf.name}</h6>
                        </div>
                    ))}
                    <button onClick={handleClick}>next page</button>
                </div>
            }
        </>
)}

export default Nfts