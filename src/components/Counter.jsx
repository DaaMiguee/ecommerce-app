import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { increment, decrement } from '../features/counter/counterSlice'
import { useDispatch, useSelector } from 'react-redux'
import { AntDesign } from '@expo/vector-icons';

const Counter = () => {
    const count = useSelector((state) => state.counterReducer.value)
    const dispatch = useDispatch()
    return (
        <View style={styles.container}>
            <Pressable style={styles.button} onPress={() => dispatch(decrement())}>
                <AntDesign name="minuscircleo" size={24} color="black" />
            </Pressable>
            <Text style={styles.text}>{count}</Text>
            <Pressable style={styles.button} onPress={() => dispatch(increment())}>
                <AntDesign name="pluscircleo" size={24} color="black" />
            </Pressable>
        </View>
    )
}

export default Counter

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    text:{
        fontSize: 20,
    }
})