import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return ( 
        <View style={ styles.viewStyle }>
            <Feather name="search" style={ styles.iconStyle } />
            <TextInput
                style={ styles.inputStyle }
                placeholder="Search"
                value={ term }
                onChangeText={ value => onTermChange(value) }
                onEndEditing={ () => onTermSubmit() }
                autoCapitalize="none"
                autoCorrect={ false }
            />
        </View>
     );
}

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#eee',
        height: 50,
        borderRadius: 5,
        marginTop: 10,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginBottom: 10
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 30,
        alignSelf: 'center',
        marginHorizontal: 15
    }
})
 
export default SearchBar;