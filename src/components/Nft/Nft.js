import React from 'react';
import './Nft.css';


const Nft = ({id, name, image, lastRefAsset}) => {
    console.log(lastRefAsset)
    return (
        <div ref={lastRefAsset} className="Nft"> 
            <img src={image} alt={name}/>
            <h6>{name}</h6>
        </div>
)}

export default React.memo(Nft)