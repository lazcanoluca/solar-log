import React, { useState, useEffect } from 'react';
import { fetchFilteredObjects } from '../OpenSolarSystemAPI/config';


export const useFilteredObjects = () => {
    const [filters, setFilters] = useState({});
    const [objects, setObjects] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [page, setPage] = useState(1);

    const fetchObjects = async (filters) => {
        try {
            setError(false);
            setLoading(true);

            console.log('here with filters:', filters);
            const objects = await fetchFilteredObjects(filters);

            // setObjects(prev => (
            //     page > 1 ? [...prev, ...objects] : objects
            // ));

            console.log('Objects set:', objects);
            setObjects(objects);
        } catch (error) {
            setError(true);
            console.log('error')
        }
        setLoading(false);
        //fetchFilteredObjects(filters).then(data => setObjects(data));
    };

    // Initial render
    useEffect(() => {
        fetchObjects(filters);
        // setPage(1);
        console.log('fetching from api with the following filters:', filters);
    }, [filters]);

    // Load more
    // useEffect(() => {
    //     if (!isLoadingMore) return;

    //     fetchObjects(page+1, filters)
    //     setIsLoadingMore(false);
    // }, [isLoadingMore])

    return { filters, objects, loading, error, setFilters, setIsLoadingMore };
};
