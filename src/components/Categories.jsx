import { FlatList, StyleSheet, View, Text, ActivityIndicator, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import CategoryItem from './CategoryItem';
import { useGetCategoriesQuery } from '../services/shopService';
import {setCategories} from '../features/shop/shopSlice'

const Categories = ({ navigation, keyword }) => {
    const { data: categoriesData, isLoading, error } = useGetCategoriesQuery();
    
    const [showAll, setShowAll] = useState(false);
    const initialCategoriesToShow = 4;
    
    const dispatch = useDispatch();

    useEffect(() => {
        if (categoriesData) {
            dispatch(setCategories(categoriesData));
        }
    }, [dispatch, categoriesData]);

    let categoriesToDisplay = categoriesData;

    if (!showAll && categoriesData) {
        categoriesToDisplay = categoriesData.slice(0, initialCategoriesToShow);
    }

    const handleShowAllPress = () => {
        // navego pasando por prop las categorias (luego tengo que desestructurar categories de route.params)
        navigation.navigate('AllCategories', { categoriesData });
    };

    if (isLoading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#000" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.container}>
                <Text>Error al cargar las categorías</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={categoriesToDisplay}
                keyExtractor={(category) => category}
                renderItem={({ item }) => (
                    <CategoryItem
                        navigation={navigation}
                        category={item}
                        keyword={keyword}
                    />
                )}
                horizontal={true}
            />
            {!showAll && (
                <Pressable onPress={handleShowAllPress}>
                    <Text>Ver más categorías</Text>
                </Pressable>
            )}
        </View>
    );
};

export default Categories;

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 12,
    },
});
