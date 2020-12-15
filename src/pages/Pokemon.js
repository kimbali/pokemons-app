import React, { useEffect, useState, useContext } from 'react'
import PropTypes from 'prop-types'
import Layout from 'HOK/Layout'
import logic from 'logic/logic'
import LanguageContext from 'context/LanguageContext';
import languages from 'config.json';
import PokemonIMG from 'components/PokemonIMG';
import LevelBar from 'components/LevelBar';

function Pokemon({ params }) {
    const [pokemonData, setPokemonData] = useState(null)
    const { lang } = useContext(LanguageContext);

    useEffect(() => {
        if(!params.id) return null;
        logic.retrievePokemonById(params.id).then(data => setPokemonData(data.pokemon))
    }, [ params ])

    
    if(!pokemonData) return null;
    
    const pokemonName = pokemonData.name[languages[lang]]
    const { base, type } = pokemonData;
    return (
        <Layout pageId="pokemon-details" title={pokemonName}>
            <div className="pokemon-details-data">
                <h2>Pokemon details</h2>
                {
                    Object.entries(base).map(baseElement => 
                        <LevelBar 
                            key={`${pokemonName}-${baseElement[0]}`} 
                            level={baseElement[1]}   
                            name={baseElement[0]}
                        />
                    )
                }
            </div>
            <PokemonIMG id={params.id}/>
        </Layout>
    )
}

Pokemon.propTypes = {
    params: PropTypes.object
}

export default Pokemon

