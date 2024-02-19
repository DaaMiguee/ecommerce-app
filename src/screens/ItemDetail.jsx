import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import allProducts from '../data/products.json';
import { colors } from '../global/colors';

const ItemDetail = ({ navigation, route }) => {
  const [product, setProduct] = useState(null);

  const { id } = route.params;

  useEffect(() => {
    const productFinded = allProducts.find((product) => product.id === id);
    setProduct(productFinded);
  }, [id]);

  return (
    <View style={styles.main}>
      {product ? (
        <View style={styles.container}>
          <Image
            source={{ uri: product.images[0] }}
            style={styles.image}
            resizeMode='cover'
          />
          <View style={styles.textContainer}>
            <Text style={styles.descriptionText}>{product.title}</Text>
            <Text style={styles.descriptionText}>{product.description}</Text>
            <Text style={styles.descriptionTextPrice}>${product.price}</Text>
            <Pressable style={styles.buy}>
              <Text style={styles.buyText}>Agregar</Text>
            </Pressable>
          </View>
        </View>
      ) : (
        <View>
          <Text>Cargando...</Text>
        </View>
      )}
    </View>
  );
};

export default ItemDetail;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: '100%',
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100%',
  },
  image: {
    width: '100%',
    height: 400,
    marginBottom: 15,
  },
  textContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 12,
  },
  descriptionText: {
    fontFamily: "RobotoRegular",
    fontSize: 16,
    color: colors.text_300,
    paddingVertical: 4,
  },
  descriptionTextPrice: {
    fontFamily: "RobotoRegular",
    fontSize: 25,
    color: colors.text_400,
    paddingVertical: 6,
  },
  buy: {
    padding: 10,
    marginVertical: 10,
    borderRadius: 6,
    backgroundColor: colors.text_500,
  },
  buyText: {
    fontFamily: "RobotoRegular",
    fontSize: 22,
    color: colors.text_100,
  },
});
