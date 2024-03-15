import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'

const SubmitButton = ({ onPress, children, disabled}) => {
    return(
        <Pressable style={ disabled ? styles.btnDisabled : styles.button} onPress={onPress} disabled={disabled}>
            {children}
        </Pressable>
    )
}

export default SubmitButton

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary_300,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        width: 70,
        height: 70,
    },
    btnDisabled:{
        backgroundColor: colors.bg_300,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        width: 70,
        height: 70,
    },
})