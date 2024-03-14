import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CartItem from '../components/CartItem';
import CheckoutButton from '../components/CheckoutButton';
import { colors } from '../global/colors';
import { useSelector } from 'react-redux';
import { usePostOrderMutation } from '../services/shopService';

const Cart = () => {

    const cartItems = useSelector(state => state.cartReducer.value.items);
    const total = useSelector(state => state.cartReducer.value.total);
    const itemsAdded = cartItems.length >= 1;
    const [triggerPost, result] = usePostOrderMutation();

    const confirmCart = () => {
        triggerPost({ total, cartItems, user: 'userLogged' })
    }
    return itemsAdded ? (
        <View style={styles.container}>
            <FlatList
                data={cartItems}
                renderItem={({ item }) => <CartItem product={item} />}
                keyExtractor={(item) => item.id}
            />
            <Pressable onPress={() => confirmCart()}>
                <Text>Confirmar Pedido</Text>
            </Pressable>
            <View style={styles.totalContainer}>
                <Text style={styles.totalText}>Total: ${total}</Text>
                <CheckoutButton />
            </View>
        </View>
    ) : (
        <View style={styles.noProductsContainer}>
            <Text style={styles.text}> No hay productos en el carrito</Text>
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
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 70,
        alignItems: 'center',
        paddingHorizontal: 21,
        marginBottom: 10,
    },
    totalText: {
        width: '30%',
        fontSize: 20,
        color: colors.text_300,
        fontFamily: 'RobotoRegular'
    },
    noProductsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    }
})