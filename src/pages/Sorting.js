import React, { useContext, useEffect, useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import LanguageContext from 'context/LanguageContext';
import logic from 'logic/logic';
import CatalogList from 'components/catalog/CatalogList';
import Layout from 'HOK/Layout';
import SortingButtons from 'components/catalog/SortingButtons';

function Sorting({ params }) {
    const { lang } = useContext(LanguageContext);
    const [pokemonsList, setPokemonsList] = useState([]);

    const selectType = useCallback(
        (type) => {
            logic.findPokemonsByType({ type, lang }).then(res => {
                setPokemonsList(res.pokemons)
            })
        },
        [ lang ],
    );

    useEffect(() => {
        if(params.type) selectType(params.type)
    }, [params, lang, selectType])

    return (
        <Layout>
            <SortingButtons type={params.type}/>
            <CatalogList pokemonsList={pokemonsList}/>
        </Layout>
    )
}

Sorting.propTypes = {
    params: PropTypes.object
}

export default Sorting

