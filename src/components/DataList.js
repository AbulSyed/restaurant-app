import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import DataDetails from './DataDetails';

const DataList = ({ title, data }) => {
    return ( 
        <View style={ styles.viewStyle }>
            <Text style={ styles.textStyle }>{ title }</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={ false }
                data={ data }
                keyExtractor={ data => data.id }
                renderItem={ ({ item }) => (
                    <DataDetails item={ item } />
                ) }
            />
        </View>
     );
}

const styles = StyleSheet.create({
    viewStyle: {
        marginVertical: 10
    },
    textStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 15,
        marginBottom: 5
    }
})
 
export default DataList;