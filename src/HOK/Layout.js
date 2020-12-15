import React from 'react'
import PropTypes from 'prop-types'
import LanguageList from 'components/language/LanguageList'
import LOGO from 'images/pokemon-logo.png';
import { Link } from 'wouter';
function Layout({ children, pageId = '', title = 'Pokemons' }) {
    return (
        <>
          <header className="page-header">
              <Link to="/catalog">
                <img className="logo" src={LOGO} alt="Pokemon logo"/>
              </Link>
              <LanguageList/>
          </header>
          <h1>{title}</h1>
          <article className="main-content" id={pageId}>
            <main>{children}</main>
          </article>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    title: PropTypes.string
}

export default Layout