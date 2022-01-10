import React, { useEffect, useState } from 'react';

// Components
import HeroSection from './HeroSection';

// API
import { fetchObject, fetchObjects, fetchType, fetchFilteredObjects } from '../OpenSolarSystemAPI/config';
import { featuredImage } from '../UnsplashAPI/config';
import FiltersBar from './FiltersBar';

// Hooks
import { useFilteredObjects } from '../hooks/useFilteredObjects';

const Home = () => {

    const {
        filters,
        objects,
        loading,
        error,
        setFilters,
        setIsLoadingMore,
    } = useFilteredObjects();

    const objectId = 'lune';
    const search_term = 'stars';
    const body_type = 'Moon';

    // const filters = filteredObjects;

    // const objects = fetchObjects();
    // const object = fetchObject(objectId);

    // console.log(object);
    // console.log(objects);

    const featured_image = featuredImage(search_term);

    // const [objects, setObjects] = useState([]);

    // useEffect(() => {
    //     fetchFilteredObjects(filters).then(data => setObjects(data));
    // }, [])

    return (
        <>
            <HeroSection image={featured_image}/>
            <FiltersBar setFilters={setFilters}/>
            <p>{ JSON.stringify(objects) }</p>
            <p>{ objects.length }</p>
        </>
    )
};

export default Home;
