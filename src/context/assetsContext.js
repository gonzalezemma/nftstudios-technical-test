import React, {useState} from 'react'

const Context = React.createContext({})

export const AssetsContextProvider = ({children}) => {
    const [assets, setAssets] = useState([]);

    return (
        <Context.Provider value={{assets, setAssets}}>
            {children}
        </Context.Provider>
    )
    
}

export default Context;