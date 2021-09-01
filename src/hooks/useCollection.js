
import { useEffect, useState } from 'react'
import {getCollection} from 'service/assets'

const useCollection = () => {
    const [collection, setCollection] = useState();

    useEffect(() => {
        getCollection().then(res => {
            console.log(res)
            const {name, image_url, external_url, banner_image_url} = res
            setCollection({name, image_url, external_url, banner_image_url})
        })
    }, [])
    
    return collection
}

export default useCollection