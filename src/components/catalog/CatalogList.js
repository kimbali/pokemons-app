import React from 'react'
import PropTypes from 'prop-types'
import CatalogListItem from './CatalogListItem'

function CatalogList({ pokemonsList = [] }) {
    return (
        <ul className="catalog-list">
            {
                pokemonsList.length > 0 
                    ? pokemonsList.map(pokemon => 
                        <CatalogListItem 
                            key={`pokemon-${pokemon.id}`} 
                            pokemon={pokemon}/>
                        ) 
                    : <p>No pokemons</p>
            }
        </ul>
    )
}

CatalogList.propTypes = {
    pokemonsList: PropTypes.arrayOf(PropTypes.object)
}

export default CatalogList

