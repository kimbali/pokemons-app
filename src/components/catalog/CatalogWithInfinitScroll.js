import React, { useEffect, useState, useRef, useCallback, useContext } from 'react'
import logic from 'logic/logic'
import useNearScreen from 'hooks/useNearScreen';
import debounce from 'just-debounce-it';
import LanguageContext from 'context/LanguageContext';

function CatalogWithInfinitScroll({ setPokemonsList }) {
    const externalRef = useRef();
    const [page, setPage] = useState(0);
    const { isNearScreen } = useNearScreen({ externalRef, once: false });
    const { lang, } = useContext(LanguageContext);
    const [currentLang, setCurrentLang] = useState(lang);

    useEffect(() => {
        setPage(0);
        setPokemonsList([])
        setCurrentLang(lang)
    }, [lang])
    
    useEffect (()  => {
        if (currentLang !== lang) {
            return null;
        }
        logic.createCatalog({ page, lang: currentLang })
            .then(res => setPokemonsList(prevPokemons => prevPokemons.concat(res.pokemons))
    )}, [ page, currentLang ])

    const deboundePage = useCallback(debounce(
        () => setPage(prevPage => prevPage + 1), 1000
    ), [])

    useEffect(() => {
       if (isNearScreen) deboundePage();
    }, [ isNearScreen, deboundePage ])

    return (<div id="visor" ref={externalRef} ></div>)
}

CatalogWithInfinitScroll.propTypes = {

}

export default CatalogWithInfinitScroll

