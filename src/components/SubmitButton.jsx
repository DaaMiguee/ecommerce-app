import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'

const SubmitButton = ({ onPress, children, disabled}) => {
    return(
        <Pressable style={ disabled ? styles.button : styles.button} onPress={onPress} disabled={disabled}>
            {children}
        </Pressable>
    )
}

export default SubmitButton

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.bg_dark,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        width: 65,
        height: 65,
    },
    btnDisabled:{
        backgroundColor: '#c2c2c2',
    },
    textBtn: {
        color: colors.text_100,
        fontSize: 18,
    }

})