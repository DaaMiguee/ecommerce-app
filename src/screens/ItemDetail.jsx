import { useDispatch } from 'react-redux';
import { StyleSheet, Text, View, Image, Pressable, ScrollView, ActivityIndicator } from 'react-native';
import React from 'react';
import { colors } from '../global/colors';
import Counter from '../components/Counter';
import { addItem } from '../features/shop/cartSlice'

const ItemDetail = ({ route }) => {

  const { product } = route.params;

  const dispatch = useDispatch();
  const onAddCart = () => {
    dispatch(addItem({ ...product, quantity: 1 }))
  }

  return (
    <ScrollView style={styles.main}>
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
          </View>
          <View style={styles.buttonsContainer}>
            <View style={styles.quantityContainer}>
              <Counter />
            </View>
            <Pressable style={styles.buy} onPress={onAddCart}>
              <Text style={styles.buyText}>Agregar al carrito</Text>
            </Pressable>
          </View>
        </View>
      ) : (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#000" />
        </View>
      )}
    </ScrollView>
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
    width: "100%",
    paddingHorizontal: 21,

  },
  descriptionText: {
    fontFamily: 'RobotoRegular',
    fontSize: 16,
    color: colors.text_300,
    paddingVertical: 4,
  },
  descriptionTextPrice: {
    fontFamily: 'RobotoRegular',
    fontSize: 25,
    color: colors.text_400,
  },
  buy: {
    borderRadius: 12,
    backgroundColor: colors.bg_dark,
    width: '60%',
  },
  buyText: {
    fontFamily: 'RobotoRegular',
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text_100,
    textAlign: 'center',
    padding: 15,
  },
  buttonsContainer: {
    height: 70,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 21,
    marginTop: 15,
  },
  quantityContainer: {
    width: '35%',
    justifyContent: 'center',
  },
});
