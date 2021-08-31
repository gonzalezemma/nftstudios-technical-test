import React from 'react';
import { map } from 'lodash';
import useAssets from 'hooks/useAssets';
import './Assets.css';

const Assets = () => {
    const {assets, loading, loadingPage, setPage} = useAssets();

    const handleClick = () => {
        setPage(prevPage => prevPage + 1)
    }

    return (
        <>
            {loading ? 
                'Loading...' :
                <div className="AssetsList">
                    {map(assets, nft => (
                        <div key={nft.id} className="AssetsList-item"> 
                            <img src={nft.image_preview_url} alt={nft.name}/>
                            <h6>{nft.name}</h6>
                        </div>
                    ))}
                    {loadingPage && <p>'loading...</p>}
                    <button onClick={handleClick}>next page</button>
                </div>
            }
        </>
)}

export default Assets