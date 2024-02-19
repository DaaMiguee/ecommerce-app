import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Entypo, AntDesign, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { colors } from '../global/colors';
import { useNavigation } from '@react-navigation/native';

const NavBar = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Pressable style={styles.navBtn} onPress={() => navigation.navigate('Home')}>
                <Entypo name="home" size={22} color={colors.text_200} />
                <Text style={styles.text}>Inicio</Text>
            </Pressable>
            <Pressable style={styles.navBtn} onPress={() => navigation.navigate('AllCategories')}>
                <AntDesign name="search1" size={22} color={colors.text_200} />
                <Text style={styles.text}>Categorías</Text>
            </Pressable>
            <Pressable style={styles.navBtn} onPress={() => navigation.navigate('Cart')}>
                <FontAwesome5 name="shopping-cart" size={22} color={colors.text_200} />
                <Text style={styles.text}>Carrito</Text>
            </Pressable>
            <Pressable style={styles.navBtn} onPress={() => navigation.navigate('Profile')}>
                <Ionicons name="person" size={22} color={colors.text_200} />
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
        backgroundColor: colors.bg_primary,
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
        fontFamily: "RobotoRegular",
        fontSize: 13,
        color: colors.text_200,
        marginTop: 2,
    }
})