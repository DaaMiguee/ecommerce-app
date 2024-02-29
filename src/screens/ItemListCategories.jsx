import { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ProductItem from '../components/ProductItem';
import { useSelector } from 'react-redux';

function ItemListCategories({ navigation }) {
  const [products, setProducts] = useState([]);
  const productsFilteredByCategory = useSelector((state) => state.shopReducer.value.productsFilteredByCategory)

  useEffect(() => {
    setProducts(productsFilteredByCategory)
  }, [productsFilteredByCategory]);

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={products}
        renderItem={({ item }) => (
          <ProductItem product={item} navigation={navigation} />
        )}
        keyExtractor={(item) => item.id}
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
