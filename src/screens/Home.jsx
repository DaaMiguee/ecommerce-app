import { StyleSheet, View, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Categories from '../components/Categories';
import Search from '../components/Search';
import ProductsView from './ProductsView';
import { colors } from '../global/colors';
import ProductList from '../components/ProductList';

const Home = ({ navigation }) => {
  const [keyword, setKeyword] = useState('');

  return (
    <View  style={styles.container}>
      <View>
        <Search onSearch={setKeyword} />
      </View>
      {keyword ? (
        <ProductsView navigation={navigation} keyword={keyword} />
      ) : (
        <ScrollView >
          <View>
            <Categories keyword={keyword} navigation={navigation} />
          </View>
          <View  style={styles.listContainer}>
            <ProductList navigation={navigation} categoryShow='pizzas'/>
            <ProductList navigation={navigation} categoryShow='empanadas'/>
            <ProductList navigation={navigation} categoryShow='complementos'/>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: colors.bg_200,
  },
  listContainer:{
    gap: 20,
  }
});
