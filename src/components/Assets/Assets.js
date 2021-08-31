import React from 'react';
import { map } from 'lodash';
import useAssets from 'hooks/useAssets';
import Nft from 'components/Nft/Nft';
import './Assets.css';

const Assets = () => {
    const {assets, loading, loadingPage, lastRefAsset} = useAssets();

    return (
        <>
            {loading ? 
                'Loading...' :
                <div className="AssetsList">
                    {map(assets, ({id, name, image_preview_url}) => (
                        <Nft 
                            key={id} 
                            id={id} 
                            name={name} 
                            image={image_preview_url}
                            lastRefAsset={lastRefAsset}                           
                        />
                    ))}
                    {loadingPage && <p>loading...</p>}
                </div>
            }
        </>
)}

export default Assets