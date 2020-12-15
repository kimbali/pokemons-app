import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import POKEDEX_IMG from 'images/pokedex.png';

function PokemonIMG({ id }) {
    const [IMG_URL, setImageURL] = useState(null);
    const [loadingIMG, setLoadingIMG] = useState(true);

    useEffect(() => {
        const URL = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
        fetch(URL)
            .then((res) => {
                if(res.ok) {
                    setImageURL(URL);
                    setLoadingIMG(false);
                }
            })
            .catch((err) => console.log(err))
    }, [id])

    if(!id) return null;
    return (
        <div className="pokemon-img-container">
            {
                loadingIMG 
                    ? <img src={POKEDEX_IMG} alt="Pokedex"/> 
                    : <img height="100" alt="Pokemon" src={IMG_URL}/>
            }
        </div>
    )
}

PokemonIMG.propTypes = {
    id: PropTypes.string
}

export default PokemonIMG

