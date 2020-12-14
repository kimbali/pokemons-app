import React, { useEffect, useState, useRef, useCallback } from 'react'
import logic from '../logic/logic'
import CatalogList from '../components/catalog/CatalogList';
import useNearScreen from 'hooks/useNearScreen';
import debounce from 'just-debounce-it';
import { ENG } from 'config.json';

function Catalog() {
    const [pokemonsList, setPokemonsList] = useState([]);
    const externalRef = useRef();
    const [page, setPage] = useState(0);
    const { isNearScreen } = useNearScreen({ externalRef, once: false });
    
    useEffect(() => {
        logic.createCatalog({ page, lang: ENG })
            .then(res => setPokemonsList(prevPokemons => prevPokemons.concat(res.pokemons))
    )}, [ page ])

    const deboundePage = useCallback(debounce(
        () => setPage(prevPage => prevPage + 1), 1000
    ), [])

    useEffect(() => {
       if (isNearScreen) deboundePage();
    }, [ isNearScreen, deboundePage ])

    return (
        <div id="catalog-page">
            <h2>Catalog of pokemons</h2>
            {
                pokemonsList.length > 0 
                    ? <CatalogList pokemonsList={pokemonsList}/>
                    : <p>No pokemons</p>
            }
            <div id="visor" ref={externalRef} ></div>
        </div>
    )
}

export default Catalog

