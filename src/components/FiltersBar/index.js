import React, { useState, useEffect } from 'react';

import { Wrapper, Filters, FilterBodyTypes, FilterApplyButton } from './FiltersBar.styles';

const FiltersBar = ({ setFilters }) => {

    const body_types = ['Star', 'Planets', 'Dwarf planets', 'Asteroids', 'Comets', 'Moons'];

    // Define hook for selected body types filter. Use true for all as initial state.
    const [checkedBodyType, setCheckedBodyType] = useState(
        // new Array(body_types.length).fill(true);
        [true, true, true, true, true, true]
    );
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

    // Function that updates the checkedBodyType array of the useState hook, according to what has been checked on the
    // checkboxes. This function is called each time a checkbox changes.
    const handleOnChange = (position) => {
        const updatedCheckedBodyType = checkedBodyType.map(
            (itemBodyType, index) => (index == position ? !itemBodyType : itemBodyType)
        );
        // Updates hook, array containing the state of each check of the filter.
        setCheckedBodyType(updatedCheckedBodyType);
        // Updates the include_body_types_state object, to be used as parameter for the filter.
        // ATTENTION: I USE THE UPDATED ONE BC APPARENTLY HOOKS ARE ASYNC IN REACT, SO I HAVE NO GUARANTEE
        // OF THE HOOK STATE BEING UPDATED. VISIBLE IN THE CONSOLE LOGS DOWN.
        const updatedBodyType = {
            star: updatedCheckedBodyType[0],
            planets: updatedCheckedBodyType[1],
            dwarf_planets: updatedCheckedBodyType[2],
            asteroids: updatedCheckedBodyType[3],
            comets: updatedCheckedBodyType[4],
            moons: updatedCheckedBodyType[5],
        };
        setBodyType(updatedBodyType);

        //console.log('checkedBodyType array', updatedCheckedBodyType);
        //console.log('include_body_types_state object', updatedBodyType);
    };

    const [filteredObjects, setFilteredObjects] = useState(
        {
            include_body_types: bodyType, // use the filters set in previous hook. BACK TO ALL FALSE BC ITS INITIAL
            // order_by: '',
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
            // order_by: '',
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
        console.log('Filters set on useFilteredObjects', filteredObjects);
    }, [setFilters, filteredObjects]);

    return (
        <Wrapper>
            <h1>Filters</h1>
            <Filters>
                <FilterBodyTypes>
                    {body_types.map( (body_type, index) => (
                        <li key={index}>
                            <input
                                type='checkbox'
                                name={body_type}
                                value={body_type}
                                checked={checkedBodyType[index]}
                                onChange={() => handleOnChange(index)}
                            />
                            <label>{body_type}</label>
                        </li>
                    ))};
                </FilterBodyTypes>
                {/* <FilterOrder>
                    <FilterOrderBy></FilterOrderBy>
                    <FilterOrderDir></FilterOrderDir>
                </FilterOrder>
                <FilterSearchBar></FilterSearchBar> */}
                <FilterApplyButton onClick={() => updateFilteredObjects()}>kfjdgvdsfgh</FilterApplyButton>
            </Filters>
        </Wrapper>
    )
};

export default FiltersBar;
