import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import categories from "../data/categories.json";
import CategoryItem from "./CategoryItem";

const Categories = ({ navigation, keyword }) => {
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
