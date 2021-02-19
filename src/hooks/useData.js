import React, { useState, useEffect } from 'react';
import yelp from '../api/yelp';

const useData = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    term: searchTerm,
                    location: 'london',
                    limit: 50
                }
            });
            setData(response.data.businesses);
            setError(null);
        }catch(error){
            setError(error.message);
            console.log(error.message);
        }
    }

    useEffect(() => {
        searchApi('pasta');
    }, []);

    return { data, error, searchApi }
}

export default useData;