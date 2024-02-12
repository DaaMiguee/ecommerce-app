import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NavBar from '../components/NavBar'
import categoryData from '../data/categories.json'
import CategoryItem from '../components/CategoryItem'
import { colors } from '../global/colors'
import ProductsView from './ProductsView'

const AllCategories = ({ onChangeScreen, categorySelected, setCategorySelected }) => {

    return !categorySelected ? (
        <View style={styles.container}>
            <Text style={styles.text}>Todas las categorías</Text>
            <View style={styles.listContainer}>
                <FlatList
                    numColumns={2}
                    data={categoryData}
                    keyExtractor={(category) => category}
                    renderItem={({ item }) => <CategoryItem
                        style={styles.categoryItem}
                        category={item}
                        setCategorySelected={setCategorySelected} />}
                />
            </View>
            <NavBar onChangeScreen={onChangeScreen} />
        </View>
    ) : <ProductsView categorySelected={categorySelected} setCategorySelected={setCategorySelected}/>
}

export default AllCategories

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listContainer: {
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 20,
    },
    categoryItem: {
        height: 150,
        width: 170,
        margin: 4,
        backgroundColor: colors.text_300
    },
})