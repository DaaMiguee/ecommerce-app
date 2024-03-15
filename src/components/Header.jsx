import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors } from '../global/colors';

const Header = ({title}) => {

    return (
        <View style={styles.container}>
            <Text>{title}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 21,
        backgroundColor: colors.bg_200,
    }
})