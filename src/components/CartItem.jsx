import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { colors } from '../global/colors';
import ModalRemove from './ModalRemove';

const CartItem = ({ product }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleModal = (id) => {
    setModalVisible(true);
  }
  return (
    <View style={styles.container}>
      <ModalRemove
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        itemName={product.title}
      />
      <View style={styles.imageContainer}>
        <Image source={{ uri: product.images[0] }} style={styles.image} resizeMode='contain' />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.text}>{product.brand}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.text}>x{product.quantity}</Text>
          <Text style={styles.title}>${product.price}</Text>
        </View>
      </View>
      <View>
        <Pressable onPress={() => handleModal(product.id)}>
          <Feather name="delete" size={24} color="black" />
        </Pressable>
      </View>
    </View>
  )
}

export default CartItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    paddingVertical: 16,
    marginHorizontal: 21,
    borderBottomWidth: 1 / StyleSheet.hairlineWidth,
    gap: 10,
  },
  imageContainer: {

  },
  image: {
    width: 100, height: 100
  },
  infoContainer: {
    width: '65%',
    justifyContent: "space-between",
    flexShrink: 1,
    gap: 5
  },
  priceContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  text: {
    fontSize: 14,
    fontFamily: 'RobotoRegular',
    color: colors.text_200,
  },
  title: {
    fontWeight: 'bold',
    color: colors.text_300,
  }
})