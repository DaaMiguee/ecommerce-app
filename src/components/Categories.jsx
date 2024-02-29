import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import CategoryItem from './CategoryItem';
import { useSelector } from 'react-redux';

const Categories = ({ navigation, keyword }) => {
    const categories = useSelector((state) => state.shopReducer.value.categories);

    return (
        <View style={styles.container}>
            <FlatList
                data={categories}
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
