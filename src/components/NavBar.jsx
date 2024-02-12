import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Entypo, AntDesign, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { colors } from '../global/colors';

const NavBar = ({ onChangeScreen }) => {
    const changeScreen = (screen) => {
        onChangeScreen(screen)
    }
    return (
        <View style={styles.container}>
            <Pressable style={styles.navBtn} onPress={() => changeScreen('')}>
                <Entypo name="home" size={24} color="white" />
                <Text style={styles.text}>Inicio</Text>
            </Pressable>
            <Pressable style={styles.navBtn} onPress={() => changeScreen('categories')}>
                <AntDesign name="search1" size={24} color="white" />
                <Text style={styles.text}>Categorías</Text>
            </Pressable>
            <Pressable style={styles.navBtn} onPress={() => changeScreen('cart')}>
                <FontAwesome5 name="shopping-cart" size={24} color="white" />
                <Text style={styles.text}>Carrito</Text>
            </Pressable>
            <Pressable style={styles.navBtn} onPress={() => changeScreen('profile')}>
                <Ionicons name="person" size={24} color="white" />
                <Text style={styles.text}>Perfil</Text>
            </Pressable>
        </View>
    )
}

export default NavBar

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: '#111111',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        paddingVertical: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    navBtn: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        fontFamily: "PoppinsRegular",
        fontSize: 14,
        color: colors.text_100,
        marginTop: 2,
    }
})