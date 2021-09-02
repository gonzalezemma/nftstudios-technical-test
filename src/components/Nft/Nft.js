import React from 'react';
import PropTypes from 'prop-types'
import './Nft.css';


const Nft = ({id, name, image, lastRefAsset}) => (
    <div ref={lastRefAsset} className="Nft" data-testid={id}> 
        <img src={image} alt={name}/>
        <h6>{name}</h6>
    </div>
)

Nft.propTypes = {
    id: PropTypes.number.isRequired, 
    name: PropTypes.string.isRequired, 
    image: PropTypes.string.isRequired, 
    lastRefAsset: PropTypes.func.isRequired
}

export default React.memo(Nft)