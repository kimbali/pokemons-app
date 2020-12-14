import React from 'react'
import PropTypes from 'prop-types'
import CatalogListItem from './CatalogListItem'

function CatalogList({ pokemonsList = [] }) {
    return (
        <ul className="catalog-list">
            {pokemonsList.map(pokemon => 
                <CatalogListItem 
                    key={`pokemon-${pokemon.id}`} 
                    pokemon={pokemon}/>
            )}
        </ul>
    )
}

CatalogList.propTypes = {
    pokemonsList: PropTypes.arrayOf(PropTypes.object)
}

export default CatalogList

