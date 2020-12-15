import React from 'react'
import PropTypes from 'prop-types'

function LevelBar({ level, name = 'Pokemon' }) {

    if(isNaN(level)) return null;

    const levelClass = `level ${level > 100 ? 'higher' : 'lower'}`
    
    return (
        <div className="level-bar">
            <div className={levelClass} style={{ width: `${level}%`}}><p>{name}</p></div>
        </div>
    )
}

LevelBar.propTypes = {
    level: PropTypes.number,
    name: PropTypes.string
}

export default LevelBar

