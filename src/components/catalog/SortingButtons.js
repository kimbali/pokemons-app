import React, { useEffect, useState } from 'react';
import logic from 'logic/logic';
import { useLocation } from "wouter";

function SortingButtons({ type }) {
    const [typesList, setTypesList] = useState([]);
    const [, setLocation] = useLocation();

    useEffect(() => {
        logic.createTypesList().then(data => setTypesList(data.typesList))
    }, [])

    const selectType = (event) => {
        event.preventDefault();
        const type = event.target.value;
        setLocation(`/sorting/${type}`);
    }

    return (
        <div className="sorting-buttons">
            <select onChange={selectType}>
                <option value={type}>{type ? type : 'Select type'}</option>
                {
                    typesList.map(singleType => <option key={`option-${singleType}`} value={singleType}>{singleType}</option>)
                }
            </select>
        </div>
    )
}

export default SortingButtons

