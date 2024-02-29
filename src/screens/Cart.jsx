import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import allCartItems from '../data/cart.json';
import CartItem from '../components/CartItem';
import CheckoutButton from '../components/CheckoutButton';
import { colors } from '../global/colors';

const Cart = () => {
    const [cartItems, setCartItems] = useState([])
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const total = allCartItems.reduce((acc, currentItem) => acc += (currentItem.quantity * currentItem.price), 0)
        setTotal(total)
        setCartItems(allCartItems)
    })
    return (
        <View style={styles.container}>
            <FlatList
                data={cartItems}
                renderItem={({ item }) => <CartItem product={item} />}
                keyExtractor={(item) => item.id}
            />
            <View style={styles.totalContainer}>
                <Text style={styles.totalText}>Total: ${total}</Text>
                <CheckoutButton/>
            </View>
        </View>
    )
}

export default Cart;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 20,
    },
    totalContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 70,
        alignItems: 'center',
        paddingHorizontal: 21,
        marginBottom: 10,
    },
    totalText:{
        width: '30%',
        fontSize: 20,
        color: colors.text_300,
        fontFamily: 'RobotoRegular'
    }
})