import { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Text, ActivityIndicator } from 'react-native';
import ProductItem from '../components/ProductItem';
import { useSelector } from 'react-redux';
import { useGetProductsByCategoryQuery } from '../services/shopService';

function ItemListCategories({ navigation }) {
  const [products, setProducts] = useState([]);
  const category = useSelector((state) => state.shopReducer.value.categorySelected);
  const { data: productsFilteredByCategory, isLoading, error } = useGetProductsByCategoryQuery(category);

  useEffect(() => {
    if (productsFilteredByCategory) {
      setProducts(productsFilteredByCategory);
    }
    // if (productsFilteredByCategory) {
    //   const productsRaw = Object.values(productsFilteredByCategory)
    //   const productsFiltered = productsRaw.filter((product) =>
    //       product.title.includes(keyword)
    //   );
    //   setProducts(productsFiltered);
  }, [productsFilteredByCategory]);

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
        <Text>Error al cargar las categorías.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={Object.values(products)} //se convierte objeto a un array para ser leido por flatlist
        renderItem={({ item }) => (
          <ProductItem product={item} navigation={navigation} />
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
        style={styles.list}
      />
    </View>
  );
}

export default ItemListCategories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 12,
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',

  },
  list: {
    flex: 1,
    width: '100%',

  },
  listContent: {
    rowGap: 10
  }
});
