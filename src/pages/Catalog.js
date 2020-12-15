import React, { useState, useContext } from 'react'
import CatalogList from 'components/catalog/CatalogList';
import LanguageContext from 'context/LanguageContext';
import Layout from 'HOK/Layout';
import SortingButtons from 'components/catalog/SortingButtons';
import CatalogWithInfinitScroll from 'components/catalog/CatalogWithInfinitScroll';

function Catalog() {
    const [pokemonsList, setPokemonsList] = useState([]);
    const { lang } = useContext(LanguageContext);

    return (
        <Layout pageId="catalog-page" title="Catalog of pokemons">
            <SortingButtons lang={lang}/>
            <CatalogList pokemonsList={pokemonsList}/>
            <CatalogWithInfinitScroll setPokemonsList={setPokemonsList}/> 
        </Layout>
    )
}

export default Catalog

