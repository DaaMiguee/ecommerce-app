import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CategoryItem from '../components/CategoryItem';
import { colors } from '../global/colors';

const AllCategories = ({ navigation, route }) => {
    const { categoriesData } = route.params;
    
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Todas las categorías</Text>
            <View style={styles.listContainer}>
                <FlatList
                    numColumns={2}
                    data={categoriesData}
                    keyExtractor={(category) => category}
                    renderItem={({ item }) => (
                        <CategoryItem style={styles.categoryItem} navigation={navigation} category={item} />
                    )}
                />
            </View>
        </View>
    );
};

export default AllCategories;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bg_secundary,
    },
    listContainer: {
        alignItems: 'center',
        flex:1,
        marginBottom: 70,
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
        backgroundColor: colors.bg_primary,
    },
});
