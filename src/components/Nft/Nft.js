import React from 'react';
import './Nft.css';


const Nft = ({id, name, image, lastRefAsset}) => (
    <div id={id} ref={lastRefAsset} className="Nft" data-testid="nft-test"> 
        <img src={image} alt={name}/>
        <h6>{name}</h6>
    </div>
)

export default React.memo(Nft)