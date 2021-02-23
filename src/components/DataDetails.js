import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const DataDetails = ({ item }) => {
    return ( 
        <View style={ styles.viewStyle }>
            <Image style={ styles.imageStyle } source={{ uri: item.image_url }} />
            <Text style={ styles.textStyle }>{ item.name }</Text>
            <Text>{ item.rating } stars, { item.review_count } reviews</Text>
        </View>
     );
}

const styles = StyleSheet.create({
    viewStyle: {
        marginHorizontal: 15
    },
    imageStyle: {
        width: 250,
        height: 125,
        borderRadius: 5,
        marginBottom: 5
    },
    textStyle: {
        fontWeight: 'bold'
    }
})
 
export default DataDetails;