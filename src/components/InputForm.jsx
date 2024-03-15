import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../global/colors';

const InputForm = ({ label, error, onChange, isSecure }) => {
    const [input, setInput] = useState('');
    const onChangeText = (text) => {
        setInput(text);
        onChange(text);
    }

    return (
        <View style={styles.inputContainer}>
            <Text style={styles.subtitle}>{label}</Text>
            <TextInput style={styles.input} value={input} onChangeText={onChangeText} secureTextEntry={isSecure} />
            {error ? (
                <Text style={styles.error} >{error}</Text>
            ) : null}
        </View>
    )
}

export default InputForm

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        gap: 5,
    },
    subtitle: {
        fontFamily: 'RobotoRegular',
        fontSize: 16,
        color: colors.text_100,
        width: '100%',
        textAlign: 'left'
    },
    error: {
        fontFamily: 'RobotoRegular',
        fontSize: 16,
        color: colors.error,
        marginBottom: 15
    },
    input: {
        fontFamily: 'RobotoRegular',
        fontSize: 14,
        width: "100%",
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderColor: colors.text_200,
        borderRadius: 8,
        backgroundColor: colors.bg_100,
        borderWidth: 1,
        borderColor: '#d6d6d6',
    },
})