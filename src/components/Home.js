import React from 'react';

// Components
import HeroSection from './HeroSection';

const Home = () => {

    const base_url = 'https://source.unsplash.com';
    const featured_url = `${base_url}/featured`;
    const search_term = 'stars';

    const featured_image = `${featured_url}/?${search_term}`;

    return <HeroSection image={featured_image}/>
};

export default Home;
