import { View, StyleSheet, Text, Image } from 'react-native'
import React from 'react'
import Card from './Card';
import { colors } from '../global/colors';

const ProductItem = ({ item, style }) => {
  return (
    <Card style={{ ...styles.cardStyle, ...style }}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: item.images[0] }}
          style={styles.imageStyle}
          resizeMode='cover'
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.itemName}>{item.title}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
    </Card>
  )
}

export default ProductItem

const styles = StyleSheet.create({
  cardStyle: {
    width: 150,
    height: 220,
    margin: 5,
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 20,
  },
  imageContainer:{
    width: '100%',
    height: '70%',
    borderColor: '#f6f6f6',
    borderWidth: 1,
    borderRadius: 12,
    overflow: 'hidden',
  },
  imageStyle: {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
  },
  textContainer:{
    width: '100%',
    height : '30%',
    paddingTop: 8,
    gap: 2,
  },
  itemName: {
    fontFamily: 'PoppinsRegular',
    color: colors.text_200,
    fontSize: 13,
  },
  price:{
    fontFamily: 'PoppinsRegular',
    color: colors.text_400,
    fontSize: 18
  },
})