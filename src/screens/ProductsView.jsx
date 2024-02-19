import { StyleSheet, FlatList, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import ProductItem from '../components/ProductItem'
import allProducts from '../data/products.json'

const ProductsView = ({ keyword, navigation }) => {
    const [productList, setProductList] = useState([])

    useEffect(() => {
        if (keyword) {
            const regex = new RegExp(keyword, 'i'); // 'i' hace que la búsqueda sea insensible a mayúsculas y minúsculas
            const productsFiltered = allProducts.filter(product => regex.test(product.title));
            setProductList(productsFiltered);
        }
    }, [keyword]);

    return (
        <Card style={styles.container}>
            <View  style={styles.listContainer}>
                <FlatList
                    numColumns={2}
                    data={productList}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <ProductItem navigation={navigation} product={item} style={styles.productItem}/>}
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
    listContainer:{
        flex:1,
        alignItems:'center',
    },
    productItem:{
        width:175,
    }
})