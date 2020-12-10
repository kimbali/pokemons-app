import React, { useEffect, useState } from 'react'
import logic from '../logic/logic'
import PropTypes from 'prop-types'
import CatalogList from '../components/catalog/CatalogList';

function Catalog() {
    const [pokemonsList, setPokemonsList] = useState([]);

    useEffect(() => {
      logic.createCatalog().then(res => setPokemonsList(res.pokemons));
    }, [])
    return (
        <div id="catalog-page">
            <h2>Catalog of pokemons</h2>
            {
                pokemonsList.length > 0 
                    ? <CatalogList pokemonsList={pokemonsList}/>
                    : <p>No pokemons</p>
            }
        </div>
    )
}

Catalog.propTypes = {

}

export default Catalog

