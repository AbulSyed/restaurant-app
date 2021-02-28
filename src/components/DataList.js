import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import DataDetails from './DataDetails';
import { withNavigation } from 'react-navigation';

const DataList = ({ title, data, navigation }) => {
    return ( 
        <View style={ styles.viewStyle }>
            <Text style={ styles.textStyle }>{ title }</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={ false }
                data={ data }
                keyExtractor={ data => data.id }
                renderItem={ ({ item }) => (
                    <TouchableOpacity onPress={ () => navigation.navigate('Details') }>
                        <DataDetails item={ item } />
                    </TouchableOpacity>
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
 
export default withNavigation(DataList);