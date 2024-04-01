import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { View, StyleSheet, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'


const EstimateCreatorScreen = () => {

    const [title, setTitle] = useState('');
    const [squareFeet, setSquareFeet] = useState('');
    const [items, setItems] = useState([]);

    const navigation = useNavigation()

    const subtotal = items.reduce((acc, item) => acc + item.price, 0);

    const handleAddNewItem = (newItem: any) => {
        setItems(currentItems => [...currentItems, newItem]);
    }
    
    return (
        <View style={{flex: 1}}> 
            <ScrollView contentContainerStyle={{paddingBottom: 20}}>
                <TextInput placeholder="House Name" value={title} onChangeText={setTitle} />
                <TextInput placeholder="Sqft" value={squareFeet} onChangeText={setSquareFeet} />
                {items.map((item, index) => (
                    <Text key={index} onPress={() => navigation.navigate('ItemEditor', { existingItem : item})}>{item.category} - ${item.price}</Text>
                ))}
                <Text style={styles.subtotal}>Subtotal ${subtotal.toFixed(2)}</Text>
            </ScrollView>
            <TouchableOpacity 
                style={styles.fab} 
                onPress={() => navigation.navigate('ItemEditor', { addNewItem: handleAddNewItem })}
            >
                <Text style={styles.fabIcon}>+</Text>
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
 subtotal : {

    
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
});

export default EstimateCreatorScreen;