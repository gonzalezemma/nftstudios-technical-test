import {useContext, useEffect, useState} from 'react'

import Context from 'context/assetsContext';
import getNtfs from 'service/assets';

const useAssets = () => {
    const {assets, setAssets} = useContext(Context);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getNtfs({page}).then(response => {
            setAssets(response);
            setLoading(false);
        });
    }, [page, setAssets])
    
    const handleClick = () => {
        setPage(prevPage => prevPage + 1)
    }

    return {assets, loading, handleClick}
}

export default useAssets;