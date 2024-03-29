import { StyleSheet, View, TextInput, Pressable, Text } from 'react-native';
import React, { useState } from 'react';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { colors } from '../global/colors';
import TextAlert from './TextAlert';

const Search = ({ onSearch }) => {
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState('')

    const search = () => {
        const expression = /\d/;
        if (expression.test(inputValue)) {
            setError('Solo se admiten letras')
            setTimeout(()=>{setError('')},3000)
        } else {
            setError('');
            onSearch(inputValue)
        }
        onSearch(inputValue)
    }
    const removeInput = () => {
        setInputValue('')
        setError('')
        onSearch('')
    }

    return (
        <View  style={styles.container}>
            <View style={styles.subContainer}>
                <TextInput
                    placeholder='Busca por título...'
                    value={inputValue}
                    onChangeText={text => setInputValue(text)}
                    style={styles.input}
                />
                <View style={styles.btnContainer}>
                    <Pressable style={styles.btn} onPress={search}>
                        <AntDesign name='search1' size={25} color='black' />
                    </Pressable>
                    <Pressable style={styles.btn} onPress={removeInput}>
                        <Entypo name='circle-with-cross' size={25} color='black' />
                    </Pressable>
                </View>
            </View>
            {error ? <TextAlert label={error}/> : null}
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 21,
        marginBottom: 20
    },
    subContainer: {
        flexDirection: 'row',
    },
    input: {
        height: 40,
        width: '80%',
        paddingHorizontal: 15,
        borderRadius: 8,
        backgroundColor: colors.bg_100,
        borderWidth: 1,
        borderColor: '#d6d6d6',
    },
    btnContainer:{
        width: '20%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        gap: 2,
    },
    btn: {
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
})