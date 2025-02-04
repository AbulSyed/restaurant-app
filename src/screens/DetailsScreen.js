import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const DetailsScreen = ({ navigation }) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const id = navigation.getParam('id');

    const getData = async (id) => {
        try {
            const response = await yelp.get(`/${id}`);
            setData(response.data);
        }catch(error){
            setError(error.message);
            console.log(error.message);
        }
    }

    useEffect(() => {
        getData(id);
    }, []);

    return ( 
        <View style={ styles.viewStyle }>
            { data && (
                <View>
                    <Text style={ styles.textStyle }>{ data.name }</Text>
                    <FlatList
                        data={ data.photos }
                        keyExtractor={ photo => photo }
                        renderItem={ ({ item }) => (
                            <Image style={ styles.imageStyle } source={{ uri: item }} />
                        ) }
                    />
                </View>
            ) }
            { error && <Text>{ error }</Text> }
        </View>
     );
}

const styles = StyleSheet.create({
    viewStyle: {
        alignItems: 'center'
    },
    textStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10
    },
    imageStyle: {
        width: 250,
        height: 125,
        borderRadius: 5,
        marginBottom: 10
    }
})
 
export default DetailsScreen;