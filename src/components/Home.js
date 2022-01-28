import React, { useEffect, useState } from 'react';

// Components
import HeroSection from './HeroSection';
import FiltersBar from './FiltersBar';
import Grid from './Grid';
import Thumb from './Thumb';
import LoadMore from './LoadMore';
// API
import { fetchObject, fetchObjects, fetchType, fetchFilteredObjects } from '../OpenSolarSystemAPI/config';
import { featuredImage } from '../UnsplashAPI/config';
import { MeanOrbit, Millions, Thousands } from '../helpers';

// Hooks
import { useFilteredObjects } from '../hooks/useFilteredObjects';

const Home = () => {

    const {
        filters,
        objects,
        loading,
        error,
        lastPage,
        setFilters,
        setIsLoadingMore,
    } = useFilteredObjects();

    const search_term = 'stars';

    const featured_image = featuredImage(search_term);

    return (
        <>  
            <HeroSection image={featured_image}/>
            <div style={{position: 'relative', top: '-100px'}}>
                <FiltersBar setFilters={setFilters}/>
                <Grid>
                    {objects.map(object => (
                        <Thumb
                            key={object.id}
                            id={object.id}
                            name={object.englishName ? object.englishName : object.alternativeName}
                            type={object.bodyType}
                            radius={object.meanRadius}
                            orbit={MeanOrbit(object.perihelion, object.aphelion)}
                            gravity={object.gravity}
                            moons={object.moons && object.moons.length}
                            around={object.aroundPlanet && object.aroundPlanet.planet}
                            clickable
                        />
                    ))}
                </Grid>
                {!lastPage && <LoadMore setIsLoadingMore={setIsLoadingMore} />}
            </div>
        </>
    )
};

export default Home;
