import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useData from '../hooks/useData';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const { data, error, searchApi } = useData();

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