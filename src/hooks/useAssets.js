import {useContext, useEffect, useState} from 'react'
import { concat } from 'lodash';

import Context from 'context/assetsContext';
import getNtfs from 'service/assets';

const useAssets = () => {
    const {assets, setAssets} = useContext(Context);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false);
    const [loadingPage, setLoadingPage] = useState(false);

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
    

    return {assets, loading, loadingPage, setPage}
}

export default useAssets;