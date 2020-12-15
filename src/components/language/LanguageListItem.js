import React from 'react'
import PropTypes from 'prop-types'
import CountryFlag from "react-country-flag"

function LanguageListItem({ ISOcode, handleCountrySelection }) {
    const handleClick = () =>  handleCountrySelection(ISOcode);

    return (
        <li className="languages-list-item">
            <button type="button" onClick={handleClick}>
                <CountryFlag countryCode={ISOcode} svg className="flag" />
            </button>
        </li>
    )
}

LanguageListItem.propTypes = {
    ISOcode: PropTypes.string,
    handleCountrySelection: PropTypes.func
}

export default LanguageListItem