import React from 'react'
import PropTypes from 'prop-types'
import CatalogListItem from './CatalogListItem'

function CatalogList({ pokemonsList = [] }) {
    const isWaitingForData = pokemonsList.length === 0;
    return (
        <>
            {
                isWaitingForData 
                    ?   <div className="spinner"></div>
                    :   <ul className="catalog-list">
                            { pokemonsList.map(pokemon => 
                                <CatalogListItem 
                                    key={`pokemon-${pokemon.id}`} 
                                    pokemon={pokemon}/>
                            )}
                        </ul>
            }
        </>
    )
}

CatalogList.propTypes = {
    pokemonsList: PropTypes.arrayOf(PropTypes.object)
}

export default CatalogList

