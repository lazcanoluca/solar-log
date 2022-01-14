import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSortNumericDown,
    faSortNumericUp,
    faSortAlphaDown,
    faSortAlphaUp,
    faCaretDown,
    faCaretUp,
    faTrashAlt,
    faFilter,
    faSearch
} from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from 'react';

import {
    Wrapper,
    Filters,
    FilterBodyTypes,
    Button,
    FilterOrder,
    //FilterOrderBy,
    FilterOrderDir,
    ContentFilterOrder,
    FilterRange,
    ContentRange,
    RangeMass,
    FilterSearchTerm,
    SearchBar
} from './FiltersBar.styles';

import DropdownCard from '../DropdownCard';
import FilterInclude from '../FilterInclude';
import FilterOrderBy from '../FilterOrderBy';

const FiltersBar = ({ setFilters }) => {

// #region declarations
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

// #region FILTER BODY TYPES
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

// // #region FILTER SELECTED ORDER BY

//     const [selectedOrderBy, setSelectedOrderBy] = useState(
//         'englishName'
//     );

// // #endregion

// // #region FILTER SELECTED ORDER DIRECTION
// const [orderDir, setOrderDir] = useState(false);
// // #endregion

// #region FILTER RANGE
const [rangeMinRadius, setRangeMinRadius] = useState(0);
const [rangeMaxRadius, setRangeMaxRadius] = useState(0);
// #endregion

// #region MANAGE HIDE
const [hiddenInclude, setHiddenInclude] = useState(true);
const [hiddenOrderBy, setHiddenOrderBy] = useState(true);
const [hiddenRange, setHiddenRange] = useState(true);
const [hiddenSearch, setHiddenSearch] = useState(true);
// #endregion

// #region UPDATE FILTERS
    const [filteredObjects, setFilteredObjects] = useState(
        {
            include_body_types: bodyType, // use the filters set in previous hook. BACK TO ALL FALSE BC ITS INITIAL
            order_by: 'englishName',
            order_direction: false,
            min_radius: rangeMinRadius,
            max_radius: rangeMaxRadius,
            // min_radius: 0,
            // max_radius: 0,
            // search_term: '',
        }
    );

    const updateFilteredObjects = () => {
        const updatedFilteredObjects = {
            include_body_types: bodyType,
            order_by: 'englishName', //selectedOrderBy,
            order_direction: 'false', //orderDir,
            min_radius: rangeMinRadius,
            max_radius: rangeMaxRadius,
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
                    <div
                        onClick={() => setHiddenInclude(prev => !prev)}
                        className='title'
                    >
                        <h3>Include</h3>
                        <FontAwesomeIcon
                            icon={hiddenInclude ? faCaretDown : faCaretUp}
                            size='2x'
                        />
                    </div>
                    <div
                        className={hiddenInclude ? 'hide' : ''}
                    >
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
                    </div>
                </FilterBodyTypes>

                {/*
                <FilterOrder>
                    <div
                        onClick={() => setHiddenOrderBy(prev => !prev)}
                        className='title'
                    >
                        <h3>Order by</h3>
                        <FontAwesomeIcon
                            icon={hiddenOrderBy ? faCaretDown : faCaretUp}
                            size='2x'
                        />
                    </div>
                    <div
                        className={hiddenOrderBy ? 'hide' : ''}
                    >
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
                            <FontAwesomeIcon
                                icon={
                                    (selectedOrderBy === 'englishName' || selectedOrderBy === 'bodyType')
                                        ? (orderDir ? faSortAlphaUp : faSortAlphaDown)
                                        : (orderDir ? faSortNumericUp : faSortNumericDown)
                                }
                                size='2x'
                                onClick={() => setOrderDir(prev => !prev)}
                            />
                        </FilterOrderDir>
                    </div>
                </FilterOrder> 
                */}

                { /* <FilterSearchBar></FilterSearchBar> */}

                <FilterRange>
                    <div
                        onClick={() => setHiddenRange(prev => !prev)}
                        className='title'
                    >
                        <h3>Filter range</h3>
                        <FontAwesomeIcon
                            icon={hiddenRange ? faCaretDown : faCaretUp}
                            size='2x'
                        />
                    </div>
                    <div
                        className={hiddenRange ? 'hide' : ''}
                    >
                        <div className='mass'>
                            <p>Mean radius (in km):</p>
                            <div className='set-range'>
                                <input
                                    type='number'
                                    placeholder='from'
                                    value={rangeMinRadius || ''}
                                    onChange={event => setRangeMinRadius(event.target.value)}
                                />
                                -
                                <input
                                    type='number'
                                    placeholder='to'
                                    value={rangeMaxRadius || ''}
                                    onChange={event => setRangeMaxRadius(event.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </FilterRange>

                <FilterSearchTerm>
                    <div
                        onClick={() => setHiddenSearch(prev => !prev)}
                        className='title'
                    >
                        <h3>Search term</h3>
                        <FontAwesomeIcon
                            icon={hiddenSearch ? faCaretDown : faCaretUp}
                            size='2x'
                        />
                    </div>
                    <div
                        className={hiddenSearch ? 'hide' : ''}
                    >
                        <SearchBar>
                            <div
                            
                            >
                                <FontAwesomeIcon
                                    icon={faSearch}
                                />
                            </div>
                            <input
                                type='text'
                                placeholder='Search object'
                                // onChange={}
                                // value={}
                            />
                        </SearchBar>
                    </div>

                </FilterSearchTerm>


            </Filters>
            <div className='buttons'>
                <Button>
                    <div className='icon'>
                        <FontAwesomeIcon
                            className='icons'
                            icon={faTrashAlt}
                            size='1x'
                        />
                    </div>
                    <p>Reset filters</p>
                </Button>
                <Button
                    primary
                    onClick={() => updateFilteredObjects()}
                >
                    <div className='icon'>
                        <FontAwesomeIcon
                            className='icons'
                            icon={faFilter}
                            size='1x'
                        />
                    </div>
                    <p>Apply filters</p>
                </Button>
            </div>

            <DropdownCard title='Include' content={<FilterInclude />}/>
            <DropdownCard title='Order by' content={<FilterOrderBy/>}/>

        </Wrapper>
    )
};

export default FiltersBar;
