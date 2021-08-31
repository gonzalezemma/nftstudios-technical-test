const url = new URL('https://api.opensea.io/api/v1/assets')

const getNtfs = ({page = 0}) => {

    const params = {
        asset_contract_address: '0x9e1f3e8db4d1119894624632499eaed1e56d2b1d',
        format: 'json',
        limit: 20,
        offset: page * 10,
        order_direction: 'desc',
        collection: 'pixelchain'
    }
    
    url.search = new URLSearchParams(params).toString();
    
    return fetch(url, {...params})
    .then(res => res.json())
    .then(data => {
        return data;
    });
}

export default getNtfs