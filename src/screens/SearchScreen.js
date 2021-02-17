import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [data, setData] = useState([]);

    const searchApi = async () => {
        const response = await yelp.get('/search', {
            params: {
                term: term,
                location: 'london',
                limit: 50
            }
        });
        setData(response.data.businesses);
    }

    return ( 
        <View>
            <SearchBar
                term={ term }
                onTermChange={ value => setTerm(value) }
                onTermSubmit={ () => searchApi() }
            />
            <Text>Search screen</Text>
            <Text>{ data.length }</Text>
        </View>
     );
}

const styles = StyleSheet.create({

})
 
export default SearchScreen;