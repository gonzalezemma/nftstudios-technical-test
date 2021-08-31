import React,  { useEffect, useState } from 'react';
import { map } from 'lodash';
import getNtfs from '../../service/nfts';
import './Nfts.css'

const Nfts = () => {
    const [ntfs, setNtfs] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getNtfs({}).then(res => {
            setNtfs(res.assets);
            setLoading(false);
        });
    }, [setNtfs])
    
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
                </div>
            }
        </>
)}
export default Nfts