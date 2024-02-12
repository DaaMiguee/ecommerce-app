import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from './Card'
import { colors } from '../global/colors';

const CategoryItem = ({ category, setCategorySelected, style}) => {
    return (
        <Card style={{...styles.card, ...style}}>
            <Pressable style={styles.categoryBtn} onPress={()=> setCategorySelected(category)}>
                <Text style={styles.text}>{category}</Text>
            </Pressable>
        </Card>
    )
}

export default CategoryItem

const styles = StyleSheet.create({
    card: {
        borderRadius: 8,
        width: 110,
        height: 60,
        marginRight: 6,
        backgroundColor: colors.bg_terciary,
        borderRadius: 8,
        overflow: 'hidden',
    },
    categoryBtn:{
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 14,
        color: colors.text_100,
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: "PoppinsRegular"
    }
})