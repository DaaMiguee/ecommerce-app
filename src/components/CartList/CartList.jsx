import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
import React from 'react'

const CartList = ({ setModalVisible, setItemSelected ,cartItems }) => {
    const handleModal = (id) => {
        setModalVisible(true);
        setItemSelected(id);
    };

    return (
        <View style={styles.productList}>
            <FlatList
                data={cartItems}
                renderItem={({ item }) => (
                    <View style={{ width: 400, flexDirection: "row" }}>
                        <Text style={styles.productName}>{item.name}</Text>
                        <Pressable onPress={() => handleModal(item.id)}>
                            <Text style={{ fontSize: 18, marginLeft: 10 }}>❌</Text>
                        </Pressable>
                    </View>
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

export default CartList

const styles = StyleSheet.create({
    productList: {
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 10,
    },
    productName: {
        fontSize: 18,
        fontWeight: "500",
        marginBottom: 10
    },
})