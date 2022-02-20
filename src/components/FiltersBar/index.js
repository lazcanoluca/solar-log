import React, { useState, useEffect } from 'react';

import { Wrapper, Filters, Bottom } from './FiltersBar.styles';

import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import DropdownCard from '../DropdownCard';
import FilterInclude from '../FilterInclude';
import FilterOrderBy from '../FilterOrderBy';
import FilterRange from '../FilterRange';
import SearchBar from '../SearchBar';
import Button from '../Button';

const FiltersBar = ({ setFilters }) => {

// #region RANGE
const [rangeMinRadius, setRangeMinRadius] = useState(0);
const [rangeMaxRadius, setRangeMaxRadius] = useState(0);

const [rangeMinOrbit, setRangeMinOrbit] = useState(0);
const [rangeMaxOrbit, setRangeMaxOrbit] = useState(0);
// #endregion

// #region SEARCH TERM
const [searchTerm, setSearchTerm] = useState('');
// #endregion

// #region INCLUDE
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
// #endregion

// #region ORDER BY
const [selectedOrderBy, setSelectedOrderBy] = useState(
    'englishName'
);

const [orderDir, setOrderDir] = useState(false);

// #endregion

// #region UPDATE
    useEffect(() => {
        const updatedFilteredObjects = {
            include_body_types: bodyType,
            order_by: selectedOrderBy,
            order_direction: orderDir,
            min_radius: rangeMinRadius,
            max_radius: rangeMaxRadius,
            min_orbit: rangeMinOrbit,
            max_orbit: rangeMaxOrbit,
            // min_radius: 0,
            // max_radius: 0,
            search_term: searchTerm,
        };
        
        setFilters(updatedFilteredObjects);
    }, [
        bodyType,
        selectedOrderBy,
        orderDir,
        rangeMinRadius,
        rangeMaxRadius,
        rangeMinOrbit,
        rangeMaxOrbit,
        searchTerm,
        setFilters
    ]);
// #endregion

// #region RESET FILTERS
    const resetFilters = () => {
        setSearchTerm('');
        setRangeMinRadius(0);
        setRangeMaxRadius(0);
        setRangeMinOrbit(0);
        setRangeMaxOrbit(0);
        setBodyType(
            {
                star: true,
                planets: true,
                dwarf_planets: true,
                asteroids: true,
                comets: true,
                moons: true,
            }
        );
        setSelectedOrderBy('englishName');
        setOrderDir(false);
    };
// #endregion

    return (
        <Wrapper>
            <h1>Filters</h1>
            <Filters>

                <DropdownCard
                    title='Include'
                    content={
                        <FilterInclude
                            bodyType={bodyType}
                            setBodyType={setBodyType}
                        />}
                />

                <DropdownCard
                    title='Order by'
                    content={
                        <FilterOrderBy
                            selectedOrderBy={selectedOrderBy}
                            setSelectedOrderBy={setSelectedOrderBy}
                            orderDir={orderDir}
                            setOrderDir={setOrderDir}
                        />}
                />

                <DropdownCard
                    title='Range'
                    content={
                        <FilterRange
                            rangeMinRadius={rangeMinRadius}
                            setRangeMinRadius={setRangeMinRadius}
                            rangeMaxRadius={rangeMaxRadius}
                            setRangeMaxRadius={setRangeMaxRadius}
                            rangeMinOrbit={rangeMinOrbit}
                            setRangeMinOrbit={setRangeMinOrbit}
                            rangeMaxOrbit={rangeMaxOrbit}
                            setRangeMaxOrbit={setRangeMaxOrbit}
                        />}
                />

            </Filters>

            <Bottom>
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
                <Button text='Reset filters' callback={resetFilters} icon={faTrashAlt} />
            </Bottom>

        </Wrapper>
    )
};

export default FiltersBar;
