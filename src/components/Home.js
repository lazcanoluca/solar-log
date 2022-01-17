import React, { useEffect, useState } from 'react';

// Components
import HeroSection from './HeroSection';
import FiltersBar from './FiltersBar';
import Grid from './Grid';
import Thumb from './Thumb';
// API
import { fetchObject, fetchObjects, fetchType, fetchFilteredObjects } from '../OpenSolarSystemAPI/config';
import { featuredImage } from '../UnsplashAPI/config';
import { MeanOrbit, Millions } from '../helpers';


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
                            name={object.englishName}
                            type={object.bodyType}
                            radius={object.meanRadius}
                            // orbit={1}
                            orbit={Millions(MeanOrbit(object.perihelion, object.aphelion))}
                            clickable
                        />
                    ))}
                </Grid>
            </div>
        </>
    )
};

export default Home;
