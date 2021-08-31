import {useCallback, useContext, useEffect, useRef, useState} from 'react'
import { concat } from 'lodash';

import Context from 'context/assetsContext';
import getNtfs from 'service/assets';

const useAssets = () => {
    const {assets, setAssets} = useContext(Context);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false);
    const [loadingPage, setLoadingPage] = useState(false);

    const observer = useRef();

    useEffect(() => {
        setLoading(true);
        getNtfs({}).then(response => {
            setAssets(response);
            setLoading(false);
        });
    }, [setAssets])

    useEffect(() => {
        if (page === 0) return;

        setLoadingPage(true);

        getNtfs({page}).then(response => {
            setAssets(prevAssets => concat(prevAssets, response));
            setLoadingPage(false);
        });
    }, [page, setAssets])
    
    const lastRefAsset = useCallback(asset => {
        if (loading) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
              setPage(prevPage => prevPage + 1);
            }
        })
        if (asset) observer.current.observe(asset);
      
    }, [loading, setPage])

    return {assets, loading, loadingPage, lastRefAsset}
}

export default useAssets;