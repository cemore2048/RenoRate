import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { View, StyleSheet, TouchableOpacity, Text, FlatList } from 'react-native'; 

const DATA = [{id: 1, value: "Hello world"}, {id : 2, value:"Hello again"}]

const MainScreen = () => {
    const navigation = useNavigation();

    return(
        <View style={{flex : 1}}>
            <FlatList
                data={DATA}
                renderItem={({item}) => <Text style={styles.item}>{item.value}</Text>}
                keyExtractor={item => item.id}
                />
        <TouchableOpacity 
        style={styles.fab}
        onPress={() => navigation.navigate('EstimateCreatorScreen')}>
            <Text 
            style={styles.fabIcon}
            
            >+</Text>
        </TouchableOpacity>
        </View>

    );  
};

const styles = StyleSheet.create({
    item : {

    },
    fab : {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor: 'blue',
        borderRadius: 30,
        width: 56,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fabIcon : {
        fontSize : 24,
        color: 'white',
    }
})
export default MainScreen