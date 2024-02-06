import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import { Text, View, Image, StyleSheet} from "react-native";
import RemoveModal from "./src/components/RemoveModal";
import CartList from "./src/components/CartList/CartList";
import CartInput from "./src/components/CartInput/CartInput";

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState(null);

  const findNameItem = (id) => {
    const product = cartItems.find((i) => i.id === id);
    return product ? product.name : "";
  }
  const itemName = findNameItem(itemSelected);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <RemoveModal
        modalVisible={modalVisible}
        cartItems={cartItems}
        setCartItems={setCartItems}
        setModalVisible={setModalVisible}
        itemSelected={itemSelected}
        itemName={itemName}
      />
      <View style={styles.header}>
        <Text>CARRITO</Text>
        <Image style={styles.image} source={{ uri: "https://t3.ftcdn.net/jpg/05/60/17/66/360_F_560176615_cUua21qgzxDiLiiyiVGYjUnLSGnVLIi6.jpg" }} />
      </View>
      <CartInput cartItems={cartItems} setCartItems={setCartItems}/>
      <CartList cartItems={cartItems} setModalVisible={setModalVisible} setItemSelected={setItemSelected} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    paddingHorizontal: 12,
    paddingTop: Constants.statusBarHeight,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
  },
});