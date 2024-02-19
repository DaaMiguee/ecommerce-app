import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from './Card'
import { colors } from '../global/colors';

const CategoryItem = ({ navigation, category, keyword, style}) => {
    return (
        <Card style={{...styles.card, ...style}}>
            <Pressable style={styles.categoryBtn} onPress={() => navigation.navigate('ItemListCategories', {category, keyword})}>
                <Text style={styles.text}>{category}</Text>
            </Pressable>
        </Card>
    )
}

export default CategoryItem

const styles = StyleSheet.create({
    card: {
        borderRadius: 8,
        width: 'auto',
        height: 55,
        marginRight: 6,
        backgroundColor: colors.bg_primary,
        borderRadius: 8,
        overflow: 'hidden',
        paddingHorizontal:16,
        borderColor: colors.bg_terciary,
        borderWidth: 1

    },
    categoryBtn:{
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 13,
        color: colors.text_300,
        textAlign: 'center',
        fontFamily: "RobotoRegular"
    }
})