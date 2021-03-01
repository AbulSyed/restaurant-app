import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import yelp from '../api/yelp';

const DetailsScreen = ({ navigation }) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const id = navigation.getParam('id');

    const getData = async (id) => {
        try {
            const response = await yelp.get(`/${id}`);
            setData(response.data);
            console.log(response.data);
        }catch(error){
            setError(error.message);
            console.log(error.message);
        }
    }

    useEffect(() => {
        getData(id);
    }, []);

    return ( 
        <View>
            <Text>Details screen</Text>
        </View>
     );
}

const styles = StyleSheet.create({

})
 
export default DetailsScreen;