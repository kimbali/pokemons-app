import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "wouter";
import PokemonIMG from 'components/PokemonIMG';

function CatalogListItem({ pokemon } = {}) {
    const { id, name } = pokemon;
    
    return (
        <li className="catalog-list-item">
            <Link to={`/pokemon/${id}`}>
                <PokemonIMG id={id.toString()}/>
                <p>{name}</p>
            </Link>
        </li>
    )
}

CatalogListItem.propTypes = {
    pokemon: PropTypes.object
}

export default CatalogListItem;

