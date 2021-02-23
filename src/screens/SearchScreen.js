import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useData from '../hooks/useData';
import DataList from '../components/DataList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const { data, error, searchApi } = useData();

    const filterByPrice = (price) => {
        return data.filter(curr => {
            return curr.price === price;
        })
    }

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
            <DataList title="Cheap" data={ filterByPrice('£') } />
            <DataList title="Mid" data={ filterByPrice('££') } />
            <DataList title="Expensive" data={ filterByPrice('£££') } />
        </View>
     );
}

const styles = StyleSheet.create({

})
 
export default SearchScreen;