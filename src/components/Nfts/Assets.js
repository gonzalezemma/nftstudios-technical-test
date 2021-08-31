import React from 'react';
import { map } from 'lodash';
import useAssets from 'hooks/useAssets';
import './Assets.css';

const Assets = () => {
    const {assets, loading, loadingPage, lastRefAsset} = useAssets();
   
    return (
        <>
            {loading ? 
                'Loading...' :
                <div className="AssetsList">
                    {map(assets, nft => (
                        <div key={nft.id} ref={lastRefAsset} className="AssetsList-item"> 
                            <img src={nft.image_preview_url} alt={nft.name}/>
                            <h6>{nft.name}</h6>
                        </div>
                    ))}
                    {loadingPage && <p>loading...</p>}
                </div>
            }
        </>
)}

export default Assets