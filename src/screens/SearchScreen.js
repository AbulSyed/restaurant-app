import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
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

    return ( 
        <View>
            <SearchBar
                term={ term }
                onTermChange={ value => setTerm(value) }
                onTermSubmit={ () => searchApi(term) }
            />
            <Text>Search screen</Text>
            <Text>{ data.length }</Text>
            { error && <Text>{ error }</Text> }
        </View>
     );
}

const styles = StyleSheet.create({

})
 
export default SearchScreen;