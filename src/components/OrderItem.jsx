import { Image, StyleSheet, Text, View } from 'react-native';

const OrderItem = ({ order }) => {
    const total = order.items.reduce(
        (acc, currentItem) => (acc += currentItem.quantity * currentItem.price),
        0
    );
    return (
        <View>
            {/* {order.items.map((item, index) => (
                <View key={index}>
                    <Image source={{ uri: item.images[0] }} style={styles.image} resizeMode='contain' />
                </View>
            ))} */}
            <Text>Orden ID: {order.id}</Text>
            <Text>${total}</Text>
            <Text>Fecha de compra: {new Date(order.createdAt).toLocaleString()}</Text>
        </View>
    )
}

export default OrderItem;
const styles = StyleSheet.create({
    // image: {
    //     width: 50,
    //     height: 50,
    //     borderRadius: 50,
    //     backgroundColor: 'gray',
    // }
})