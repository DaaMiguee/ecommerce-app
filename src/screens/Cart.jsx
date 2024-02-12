import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NavBar from '../components/NavBar'

const Cart = ({onChangeScreen}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Carrito</Text>
            <NavBar onChangeScreen={onChangeScreen} />

        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    text: {
        fontSize: 20, 
        textAlign: 'center', 
        marginVertical: 20,
    }
})