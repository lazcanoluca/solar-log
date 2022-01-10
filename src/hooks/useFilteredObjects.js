import React, { useState, useEffect } from 'react';
import { fetchFilteredObjects } from '../OpenSolarSystemAPI/config';


export const useFilteredObjects = () => {
    const [filters, setFilters] = useState({});
    const [objects, setObjects] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    const fetchObjects = async (page, filters) => {
        try {
            setError(false);
            setLoading(true);

            console.log('here with filters:', filters);
            const objects = await fetchFilteredObjects(filters);

            console.log('Objects set:', objects);
            setObjects(objects);
        } catch (error) {
            setError(true);
            console.log('error')
        }
        setLoading(false);
        //fetchFilteredObjects(filters).then(data => setObjects(data));
    };

    useEffect(() => {
        fetchObjects(1, filters);
        console.log('fetching from api with the following filters:', filters);
    }, [filters]);

    return { filters, objects, loading, error, setFilters, setIsLoadingMore };
};
