import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import categories from '../data/categories.json'
import CategoryItem from './CategoryItem'

const Categories = ({setCategorySelected}) => {
    return (
        <View style={styles.container}>
            <FlatList
            data={categories}
            keyExtractor={(category) => category}
            renderItem={({ item }) => <CategoryItem category={item} setCategorySelected={setCategorySelected}/>}
            horizontal={true}
            />
        </View>
    )
}

export default Categories

const styles = StyleSheet.create({
    container:{
        paddingVertical: 10,
        paddingHorizontal: 12,
        
    },
})