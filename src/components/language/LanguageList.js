import React, { useContext } from 'react'
import LanguageContext from 'context/LanguageContext';
import { LANGUAGES } from 'config.json';
import LanguageListItem from './LanguageListItem';

function LanguageList() {
    const { setLang } = useContext(LanguageContext);

    const handleCountrySelection = (ISOcode) => {
        setLang(ISOcode);
    }

    return (
        <ul className="languages-list">
            {
                Object.keys(LANGUAGES).map(ISOcode => 
                    <LanguageListItem key={`country-iso-code-${ISOcode}`} ISOcode={ISOcode} handleCountrySelection={handleCountrySelection}/>
            )}
        </ul>
    )
}

export default LanguageList