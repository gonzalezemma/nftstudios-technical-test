import React from 'react'
import useCollection from 'hooks/useCollection';
import './Banner.css'

const Banner = () => {
    
  const collection = useCollection();

   return (
        <div className="banner">
            <img src={collection?.banner_image_url} alt={collection?.name}/>
            <div className="collection-profile">
                <img src={collection?.image_url} alt={collection?.name}/>
                <a href={collection?.external_url}>{collection?.name}</a >
            </div>
        </div>
   ) 
}

export default Banner;