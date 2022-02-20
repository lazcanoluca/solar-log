import { useState, useEffect } from 'react';
import { fetchFilteredObjects } from '../OpenSolarSystemAPI/config';


export const useFilteredObjects = () => {
    const [filters, setFilters] = useState({});
    const [objects, setObjects] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [page, setPage] = useState(1);
    const [lastPage, setLastPage] = useState(false); 

    const fetchObjects = async (pagina, filters) => {
        try {
            setError(false);
            setLoading(true);
            setPage(pagina);

            const objects = await fetchFilteredObjects(pagina,{filters});

            setObjects(prev => (
                pagina > 1 ? [...prev, ...objects] : objects
            ));

            objects.length < 20 && setLastPage(true);
            console.log(objects);
        } catch (error) {
            setError(true);
            console.log('error', error.stack, error.name, error.message)
        }
        setLoading(false);
    };

    // Initial render
    useEffect(() => {
        fetchObjects(1, filters);
        setLastPage(false);
    }, [filters]);

    // Load more
    useEffect(() => {
        if (!isLoadingMore) return;

        fetchObjects(page+1, filters)
        console.log('fetching from ', page+1, ' page')
        setIsLoadingMore(false);
    }, [isLoadingMore, page, filters])

    return { filters, objects, loading, error, lastPage, setFilters, setIsLoadingMore };
};
