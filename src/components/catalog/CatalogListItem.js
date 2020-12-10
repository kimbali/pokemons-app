import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import POKEDEX_IMG from '../../images/pokedex.png';

function CatalogListItem({ pokemon }) {
    const { id, name, type} = pokemon;
    const [IMG_URL, setImageURL] = useState(null);

    useEffect(() => {
        const URL = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
        fetch(URL)
            .then((res) => {
                if(res.ok) {
                    setImageURL(URL)
                } else {
                    setImageURL(POKEDEX_IMG)
                }
            })
            .catch((err) => console.log(err))

    }, [id])
    
    if(!IMG_URL) return null;
    return (
        <li className="catalog-list-item">
            <p>{name}</p>
            <img height="100" alt={name} src={IMG_URL}/>
        </li>
    )
}

CatalogListItem.propTypes = {

}

export default CatalogListItem

