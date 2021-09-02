import React, {useState} from 'react'

const Context = React.createContext({})

export const AssetsContextProvider = ({children}) => {
    const [assets, setAssets] = useState([]);
    const [collection, setCollection] = useState([]);
    const [loading, setLoading] = useState(false);

    return (
        <Context.Provider 
            value={{
                assets, 
                setAssets, 
                collection, 
                setCollection,
                loading,
                setLoading
            }}
        >
            {children}
        </Context.Provider>
    )
}

export default Context;