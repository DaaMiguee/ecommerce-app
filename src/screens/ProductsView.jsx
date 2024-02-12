import { StyleSheet, FlatList, View, Pressable, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import ProductItem from '../components/ProductItem'
import allProducts from '../data/products.json'
import { Feather } from '@expo/vector-icons';
import Categories from '../components/Categories'
import { colors } from '../global/colors'

const ProductsView = ({ categorySelected, setCategorySelected }) => {
    const [productList, setProductList] = useState([])

    const categoryNone = () => {
        setCategorySelected('')
    }

    useEffect(() => {
        if (categorySelected) {
            const products = allProducts.filter(product => product.category === categorySelected)
            // const productsFiltered = products.filter(product => product.title.includes(keyword))
            setProductList(products)
        }
    }, [categorySelected])

    return (
        <Card style={styles.container}>
            <View style={styles.returnContainer}>
                <Pressable style={styles.returnBtn} onPress={() => categoryNone()}>
                    <Feather name="arrow-left" size={24} color="black" />
                    <Text style={{fontFamily: 'PoppinsRegular'}}>Volver</Text>
                </Pressable>
            </View>
            <Categories setCategorySelected={setCategorySelected} />
            <View>
                <Text style={styles.categoryTitle}>{categorySelected}</Text>
            </View>
            <View  style={styles.listContainer}>
                <FlatList
                    numColumns={2}
                    data={productList}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <ProductItem item={item} style={styles.productItem}/>}
                />
            </View>
        </Card>
    )
}

export default ProductsView

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    returnContainer:{
        paddingHorizontal: 12,
    },
    returnBtn: {
        marginVertical: 10,
        width: 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    categoryTitle: {
        fontSize: 20,
        color: colors.text_200,
        fontFamily: 'PoppinsRegular',
        paddingVertical: 10,
        paddingHorizontal: 12,

    },
    listContainer:{
        flex:1,
        alignItems:'center',
    },
    productItem:{
        width:175,
    }
})