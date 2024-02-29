import { Pressable, StyleSheet, Text } from 'react-native';
import React from 'react';
import Card from './Card';
import { colors } from '../global/colors';
import { useDispatch } from 'react-redux';
import { setCategorySelected } from '../features/shop/shopSlice';

const CategoryItem = ({ navigation, category, keyword, style }) => {
    const dispatch = useDispatch()
    return (
        <Card style={{ ...styles.card, ...style }}>
            <Pressable style={styles.categoryBtn} onPress={() => {
                dispatch(setCategorySelected(category, keyword))
                navigation.navigate('ItemListCategories', { category, keyword })
            }}
            >
                <Text style={styles.text}>{category}</Text>
            </Pressable>
        </Card>
    )
}

export default CategoryItem;

const styles = StyleSheet.create({
    card: {
        borderRadius: 8,
        width: 'auto',
        height: 55,
        marginRight: 6,
        backgroundColor: colors.bg_primary,
        borderRadius: 8,
        overflow: 'hidden',
        paddingHorizontal: 16,
        borderColor: colors.bg_terciary,
        borderWidth: 1

    },
    categoryBtn: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 13,
        color: colors.text_300,
        textAlign: 'center',
        fontFamily: 'RobotoRegular'
    }
})