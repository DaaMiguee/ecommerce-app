import { View, StyleSheet, Text, Image, Pressable } from 'react-native';
import React from 'react';
import Card from './Card';
import { colors } from '../global/colors';

const ProductItem = ({ navigation, product, style }) => {
  
  return (
    <Pressable onPress={() => navigation.navigate('ItemDetail', {id: product.id, product: product})} style={styles.cardBtn}>
      <Card style={{ ...styles.cardStyle, ...style }}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: product.images[0] }}
            style={styles.imageStyle}
            resizeMode='cover'
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.itemName}>{product.title}</Text>
          <Text style={styles.price}>${product.price}</Text>
        </View>
      </Card>
    </Pressable>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  cardBtn:{
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardStyle: {
    width: '90%',
    height: 220,
    margin: 5,
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 20,
  },
  imageContainer: {
    width: '100%',
    height: '70%',
    borderColor: '#ffffff',
    borderWidth: 1,
    borderRadius: 12,
    overflow: 'hidden',
  },
  imageStyle: {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
  },
  textContainer: {
    width: '100%',
    height: '30%',
    paddingTop: 8,
    gap: 2,
  },
  itemName: {
    fontFamily: 'RobotoRegular',
    color: colors.text_200,
    fontSize: 13,
  },
  price: {
    fontFamily: 'RobotoRegular',
    color: colors.text_400,
    fontSize: 18,
  },
});
