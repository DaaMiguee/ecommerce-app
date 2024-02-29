import { Pressable, View, StyleSheet, Text } from 'react-native';
import { colors } from '../global/colors';

const CheckoutButton = ({ navigation }) => {
    // onPress={()=>navigation.navigate('Checkout')}
    return (
        <Pressable style={styles.cardBtn}>
            <Text style={styles.text}>Finalizar compra</Text>
        </Pressable>
    )
}

export default CheckoutButton;

const styles = StyleSheet.create({
    cardBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        backgroundColor: colors.bg_dark,
        width: '60%',
    },
    text: {
        color: colors.text_100,
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        padding: 15,
    }
})