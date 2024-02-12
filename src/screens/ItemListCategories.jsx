import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import allProducts from '../data/products.json'
import Search from '../components/Search'
import ProductItem from '../components/ProductItem'
import NavBar from '../components/NavBar'

const ItemListCategories = ({ categorySelected, keyword, setKeyword, onChangeScreen }) => {
    const [products, setProducts] = useState([])
    // const [keyword, setKeyword] = useState('')

    useEffect(() => {
        if (categorySelected) {
            const products = allProducts.filter(product => product.category === categorySelected)
            const productsFiltered = products.filter(product => product.title.includes(keyword))
            setProducts(productsFiltered)
        } else {
            const productsFiltered = allProducts.filter(product => product.title.includes(keyword))
            setProducts(productsFiltered)
        }
    }, [categorySelected, keyword])

    return (
        <View style={styles.container}>
            {/* <Search onSearch={setKeyword} /> */}
            <View style={styles.cardContainer}>
                <FlatList
                    data={products}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <ProductItem item={item} />}
                    numColumns={2}
                />
            </View>
            <NavBar onChangeScreen={onChangeScreen} />
        </View>
    )
}

export default ItemListCategories

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cardContainer: {
        alignItems: 'center',
        paddingVertical: 30,
        marginVertical: 15,
    },
})