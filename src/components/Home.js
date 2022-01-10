import React, { useEffect, useState } from 'react';

// Components
import HeroSection from './HeroSection';

// API
import { fetchObject, fetchObjects, fetchType } from '../OpenSolarSystemAPI/config';
import { featuredImage } from '../UnsplashAPI/config';

const Home = () => {

    const objectId = 'lune';
    const search_term = 'stars';
    const body_type = 'Moon';

    // const objects = fetchObjects();
    // const object = fetchObject(objectId);

    // console.log(object);
    // console.log(objects);

    const featured_image = featuredImage(search_term);

    const [objects, setObjects] = useState([]);

    useEffect(() => {
        fetchType(body_type).then(data => setObjects(data));
    }, [])

    return (
        <>
            <HeroSection image={featured_image}/>
            <p>{ JSON.stringify(objects) }</p>
            <p>{ objects.length }</p>
        </>
    )
};

export default Home;
