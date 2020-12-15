import React, { useState } from 'react';

const Context = React.createContext({})

export function LanguageContextProvider ({ children }) {
    const [lang, setLang] = useState('GB');

    return <Context.Provider value={{ lang, setLang }}>
        {children}
    </Context.Provider>
}

export default Context