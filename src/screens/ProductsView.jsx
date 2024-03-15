import { StyleSheet, FlatList, View, ActivityIndicator, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import ProductItem from '../components/ProductItem';
import { useGetProductsQuery } from '../services/shopService';
import TextAlert from '../components/TextAlert';

const ProductsView = ({ keyword, navigation }) => {
    const [productList, setProductList] = useState([]);
    const { data, isLoading, error } = useGetProductsQuery();

    useEffect(() => {
        if (keyword) {
            const regex = new RegExp(keyword, 'i'); // 'i' hace que la búsqueda sea insensible a mayúsculas y minúsculas
            if (data) {
                const productsFiltered = data.filter(product => regex.test(product.title));
                setProductList(productsFiltered);
            }
        }
    }, [keyword, data]);

    return (
        <Card style={styles.container}>
            {isLoading ?
                <ActivityIndicator size='large' color='#000' />
                :
                <View style={styles.listContainer}>
                    {productList.length ?
                        <FlatList
                            numColumns={2}
                            data={productList}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => <ProductItem navigation={navigation} product={item} style={styles.productItem} />}
                        /> :
                        <TextAlert label='No se encontraron resultados'/>}
                </View>}
        </Card>
    )
}

export default ProductsView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listContainer: {
        flex: 1,
        alignItems: 'center',
    },
    productItem: {
        width: 175,
    },
})