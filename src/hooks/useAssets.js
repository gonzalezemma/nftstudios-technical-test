import {useEffect, useState} from 'react'
import getNtfs from 'service/nfts';

const useAssets = () => {
    const [assets, setAssets] = useState([]);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getNtfs({page}).then(res => {
            setAssets(res.assets);
            setLoading(false);
        });
    }, [page, setAssets])
    
    const handleClick = () => {
        setPage(prevPage => prevPage + 1)
    }

    return {assets, loading, handleClick}
}

export default useAssets;