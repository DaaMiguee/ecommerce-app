import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NavBar from '../components/NavBar'

const Profile = ({ onChangeScreen }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Perfil</Text>
            <NavBar onChangeScreen={onChangeScreen} />

        </View>
    )
}

export default Profile

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