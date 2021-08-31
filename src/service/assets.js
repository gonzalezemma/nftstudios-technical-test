import axios from 'axios'

const url = 'https://api.opensea.io/api/v1/assets'

const getAssets = async ({page = 0}) => {
    
    const {data} = await axios.get(url, {
        params: {
            asset_contract_address: '0x9e1f3e8db4d1119894624632499eaed1e56d2b1d',
            format: 'json',
            limit: 20,
            offset: page * 10,
            order_direction: 'desc',
            collection: 'pixelchain'
        }
    })
    
    return data
}

export default getAssets