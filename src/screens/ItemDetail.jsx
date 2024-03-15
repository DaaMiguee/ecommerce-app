import { useDispatch } from 'react-redux';
import { StyleSheet, Text, View, Image, Pressable, ScrollView, ActivityIndicator } from 'react-native';
import React from 'react';
import { colors } from '../global/colors';
import Counter from '../components/Counter';
import { addItem } from '../features/shop/cartSlice'
import BackButton from '../components/BackButton';

const ItemDetail = ({ route, navigation }) => {

  const { product } = route.params;

  const dispatch = useDispatch();
  const onAddCart = () => {
    dispatch(addItem({ ...product, quantity: 1 }))
  }

  return (
    <ScrollView style={styles.main}>
      {product ? (
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <BackButton navigation={navigation} />
            <Image
              source={{ uri: product.images[0] }}
              style={styles.image}
              resizeMode='cover'
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.descriptionText}>{product.description}</Text>
            <Text style={styles.price}>${product.price}</Text>
          </View>
          <View style={styles.buttonsContainer}>
            <View style={styles.quantityContainer}>
              <Counter />
            </View>
            <Pressable style={styles.addToCart} onPress={onAddCart}>
              <Text style={styles.buyText}>Agregar al carrito</Text>
            </Pressable>
          </View>
        </View>
      ) : (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#000" />
        </View>
      )
      }
    </ScrollView >
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
  imageContainer:{
    width: '100%',
    position: 'relative',
    padding: 10,
  },
  image: {
    width: '100%',
    height: 400,
  },
  textContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
    paddingHorizontal: 21,
    gap: 10,
  },
  title:{
    fontFamily: 'RobotoRegular',
    fontSize: 20,
    color: colors.text_100,
  },
  descriptionText: {
    fontFamily: 'RobotoRegular',
    fontSize: 16,
    color: colors.text_200,
    paddingVertical: 4,
  },
  price: {
    fontFamily: 'RobotoRegular',
    fontSize: 25,
    color: colors.text_100,
  },
  addToCart: {
    borderRadius: 32,
    backgroundColor: colors.primary_300,
    width: '60%',
  },
  buyText: {
    fontFamily: 'RobotoRegular',
    fontSize: 20,
    color: colors.bg_100,
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
