
import { useContext, useEffect } from 'react'
import {getCollection} from 'service/assets'
import Context from 'context/assetsContext';

const useCollection = () => {
    const {collection, setCollection, loading, setLoading} = useContext(Context);

    useEffect(() => {
        setLoading(true);
        getCollection().then(res => {
            const {name, image_url, external_url, banner_image_url} = res
            setCollection({name, image_url, external_url, banner_image_url})
            setLoading(false);
        })
    }, [setCollection, setLoading])
    
    return {collection, loading}
}

export default useCollection