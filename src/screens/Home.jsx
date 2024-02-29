import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import Categories from '../components/Categories';
import Search from '../components/Search';
import ProductsView from './ProductsView';
import { colors } from '../global/colors';

const Home = ({ navigation }) => {
  const [keyword, setKeyword] = useState('');

  return (
    <View style={styles.container}>
      <View>
        <Search onSearch={setKeyword} />
      </View>
      {keyword ? (
        <ProductsView navigation={navigation} keyword={keyword} />
      ) : (
        <View>
          <Categories keyword={keyword} navigation={navigation} />
        </View>
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    flex: 1,
    backgroundColor: colors.bg_secundary
  },
});
