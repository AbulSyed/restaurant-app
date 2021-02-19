import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const DataList = ({ title, data }) => {
    return ( 
        <View>
            <Text style={ styles.textStyle }>{ title }</Text>
            <Text>{ data.length }</Text>
            <FlatList
                horizontal
                data={ data }
                keyExtractor={ data => data.id }
                renderItem={ ({ item }) => (
                    <Text>{ item.name }</Text>
                ) }
            />
        </View>
     );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})
 
export default DataList;