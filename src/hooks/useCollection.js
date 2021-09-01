
import { useContext, useEffect } from 'react'
import {getCollection} from 'service/assets'
import Context from 'context/assetsContext';

const useCollection = () => {
    const {collection, setCollection} = useContext(Context);

    useEffect(() => {
        getCollection().then(res => {
            const {name, image_url, external_url, banner_image_url} = res
            setCollection({name, image_url, external_url, banner_image_url})
        })
    }, [setCollection])
    
    return collection
}

export default useCollection