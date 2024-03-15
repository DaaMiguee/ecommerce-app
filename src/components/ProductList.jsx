import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useGetProductsByCategoryQuery } from '../services/shopService';
import ProductItem from './ProductItem';
import { colors } from '../global/colors';

const ProductList = ({ navigation, categoryShow }) => {
    const [products, setProducts] = useState(null)
    const { data, isLoading, error } = useGetProductsByCategoryQuery(categoryShow);

    useEffect(() => {
        if (data) {
            setProducts(Object.values(data))
        }
    }, [data])

    return (
        <View style={styles.container}>
            <Text style={styles.titleList} >{categoryShow}</Text>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <ProductItem
                    product={item}
                    navigation={navigation}
                    style={styles.styleCard} />}
                horizontal={true}
            />
        </View>
    )
}

export default ProductList

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.bg_100,
        paddingLeft: 21,
    },
    styleCard: {
        width: 175,
        height: 250,
        marginRight: 20,
    },
    titleList: {
        fontFamily: 'RobotoRegular',
        color: colors.text_100,
        fontSize: 20,
        paddingVertical: 10,
        fontWeight: 'bold',
    }
})