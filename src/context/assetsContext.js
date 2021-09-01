import React, {useState} from 'react'

const Context = React.createContext({})

export const AssetsContextProvider = ({children}) => {
    const [assets, setAssets] = useState([]);
    const [collection, setCollection] = useState([]);

    return (
        <Context.Provider value={{assets, setAssets, collection, setCollection}}>
            {children}
        </Context.Provider>
    )
}

export default Context;