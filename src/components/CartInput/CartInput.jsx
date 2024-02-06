import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react'

const CartInput = ({cartItems, setCartItems}) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (value) => setInputValue(value);

    const addItem = () => {
        if (inputValue !== "") {
            const newItem = {
                name: inputValue,
                id: new Date().getTime(),
            };
            setCartItems([...cartItems, newItem]);
            setInputValue("")
        }
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                onChangeText={handleInputChange}
                value={inputValue}
                style={styles.input}
                placeholder="Agregar un producto"
            />
            <Pressable onPress={addItem}>
                <Text style={{ fontSize: 40 }}>+</Text>
            </Pressable>
        </View>
    )
}

export default CartInput

const styles = StyleSheet.create({
    inputContainer: { flexDirection: "row" },
    input: {
        backgroundColor: "#f6f6f6",
        borderColor: "gray",
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        width: "90%",
        marginRight: 5,
    },
})