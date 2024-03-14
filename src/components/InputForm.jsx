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
        fontSize: 16,
        color: colors.text_300,
        width: '100%',
        textAlign: 'left'
    },
    error: {
        fontSize: 16,
        color: '#721c24',
        marginTop: -25,
        marginBottom: 15
    },
    input: {
        width: "100%",
        borderWidth: 1,
        paddingHorizontal: 15,
        paddingVertical: 10,
        fontSize: 14,
        borderColor: colors.text_200,
        borderRadius: 4,
        marginBottom: 20,
    },
})