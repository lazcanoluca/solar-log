import React, { useState, useEffect } from 'react';

import {
    Wrapper,
    Filters,
    FilterBodyTypes,
    FilterApplyButton,
    FilterOrder,
    FilterOrderBy,
    FilterOrderDir,
} from './FiltersBar.styles';

const FiltersBar = ({ setFilters }) => {

// #region
    const body_types = {
        star: 'Star',
        planets: 'Planets',
        dwarf_planets: 'Dwarf planets',
        asteroids: 'Asteroids',
        comets: 'Comets',
        moons: 'Moons'
    }

    const order_by = {
        englishName: 'Name',
        // moons: 'Number of moons',
        perihelion: 'Perihelion',
        aphelion: 'Aphelion',
        eccentricity: 'Eccentricity',
        inclination: 'Inclination',
        // mass: 'Mass',
        // vol: 'Volume',
        density: 'Density',
        gravity: 'Gravity',
        escape: 'Escape velocity',
        meanRadius: 'Mean Radius',
        sideralOrbit: 'Orbital period',
        sideralRotation: 'Rotation period',
        avgTemp: 'Average temperature',
        bodyType: 'Body type'
    };

    const order_dir = {
        'Ascending': false,
        'Descending': true
    };
// #endregion

// HANDLE FILTER BODY TYPES
// #region
    const [bodyType, setBodyType] = useState(
        {
            star: true,
            planets: true,
            dwarf_planets: true,
            asteroids: true,
            comets: true,
            moons: true,
        }
    );

    const handleOnChangeBodyTypes = (key) => {

        const updatedBodyType = Object.fromEntries(Object.entries(bodyType).map(
            ([ itemBodyType, state ]) => (key == itemBodyType
                                                ? [itemBodyType, !state]
                                                : [itemBodyType, state])
        ));

        setBodyType(updatedBodyType);
    };
// #endregion

// HANDLE FILTER SELECTED ORDER BY
// #region

    const [selectedOrderBy, setSelectedOrderBy] = useState(
        'englishName'
    );

// #endregion

// HANDLE FILTER SELECTED ORDER DIRECTION

// UPDATES FILTERS
// #region
    const [filteredObjects, setFilteredObjects] = useState(
        {
            include_body_types: bodyType, // use the filters set in previous hook. BACK TO ALL FALSE BC ITS INITIAL
            order_by: selectedOrderBy,
            // order_direction: false,
            // min_mass: 0,
            // max_mass: 0,
            // min_radius: 0,
            // max_radius: 0,
            // search_term: '',
        }
    );

    const updateFilteredObjects = () => {
        const updatedFilteredObjects = {
            include_body_types: bodyType,
            order_by: selectedOrderBy,
            // order_direction: false,
            // min_mass: 0,
            // max_mass: 0,
            // min_radius: 0,
            // max_radius: 0,
            // search_term: '',
        };
        console.log('Updated filters to:', updatedFilteredObjects);
        setFilteredObjects(updatedFilteredObjects);
    };

    useEffect(() => {
        setFilters(filteredObjects);
    }, [setFilters, filteredObjects]);
// #endregion

    return (
        <Wrapper>
            <h1>Filters</h1>
            <Filters>
                <FilterBodyTypes>
                    {Object.entries(body_types).map( ([ key, param ], index) => (
                        <li key={index}>
                            <input
                                type='checkbox'
                                name={key}
                                value={param}
                                checked={bodyType[key]}
                                onChange={() => handleOnChangeBodyTypes(key)}
                            />
                            <label>{param}</label>
                        </li>
                    ))}
                </FilterBodyTypes>

                <FilterOrder>
                    <FilterOrderBy>
                        <select
                            value={selectedOrderBy}
                            onChange={(event) => setSelectedOrderBy(event.target.value)}
                        >
                            {Object.entries(order_by).map( ([ key, param ], index) => (
                                <option
                                    key={index}
                                    value={key}
                                >{param}</option>
                            ))}
                        </select>
                    </FilterOrderBy>

                    <FilterOrderDir>
                        <input type='checkbox' />
                        <span><i className='fas fa-sort-numeric-down'></i></span>
                    </FilterOrderDir>
                </FilterOrder>

                { /* <FilterSearchBar></FilterSearchBar> */}
                <FilterApplyButton
                    onClick={() => updateFilteredObjects()}
                >Apply filter</FilterApplyButton>
            </Filters>
        </Wrapper>
    )
};

export default FiltersBar;
