import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import RNPickerSelect from 'react-native-picker-select'

const ItemEditorScreen = ({navigation, route}) => {
    const [itemName, setItemName] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = () => {
        const newItem = { itemName, category, price: parseFloat(price), description};

        if (route.params?.addNewItem) {
            route.params.addNewItem(newItem)
        }
        navigation.goBack();
    }

    useEffect(() => {
        if (route.params?.existingItem) {
            const item = route.params.existingItem;
            setItemName(item.itemName);
            setCategory(item.category);
            setPrice(item.price.toString()); // Assuming price is a number and needs to be converted to a string for TextInput
            setDescription(item.description);
        }
    }, [route.params?.existingItem]); // This effect runs only when `existingItem` changes.


    return (
        <View style={styles.container}>
            <TextInput placeholder="Item Name" onChangeText={setItemName} style={styles.input} />
            <RNPickerSelect
                onValueChange={(value) => setCategory(value)}
                items = {[
                    { label: 'General', value: 'general' },
                    { label: 'Plumbing', value: 'plumbing' },
                    { label: 'HVAC', value: 'hvac' },
                ]}
            />
            <TextInput placeholder={itemName ? itemName : "Price"} keyboardType="numeric" onChangeText={setPrice} style={styles.input} />
            <TextInput placeholder="Description" onChangeText={setDescription} style={styles.input} multiline />
            <Button title="Submit" onPress={handleSubmit} />
        </View>
    )
}

const styles = StyleSheet.create({
    container : {

    },
    input : {

    }
})
export default ItemEditorScreen