import React from 'react'
import useCollection from 'hooks/useCollection';
import './Banner.css'

const Banner = () => {
    
  const collection = useCollection();

   return (
        <div className="banner" data-testid="container-banner">
            <img src={collection.banner_image_url} alt="banner-img"/>
            <div className="collection-profile">
                <img src={collection.image_url} alt="collection-img"/>
                <a href={collection.external_url}>{collection.name}</a>
            </div>
        </div>
   ) 
}

export default Banner;