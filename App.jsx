import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import { View, StyleSheet, Platform } from "react-native";
import Home from "./src/screens/Home";
import ItemListCategories from "./src/screens/ItemListCategories";
import { useFonts } from "expo-font";
import { fonts } from './src/global/fonts'
import { colors } from "./src/global/colors"
import Cart from "./src/screens/Cart";
import Profile from "./src/screens/Profile";
import AllCategories from "./src/screens/AllCategories";

export default function App() {
  const [fontsLoaded] = useFonts(fonts)
  const [categorySelected, setCategorySelected] = useState('')
  const [screenSelected, setScreenSelected] = useState(null)
  const [keyword, setKeyword] = useState('')
  console.log(keyword);

  const changeScreen = (screen) => {
    if (setScreenSelected) {
      setScreenSelected(screen);
    }
  };
  const renderScreen = () => {
    switch (screenSelected) {
      case 'categories':
        // return <ItemListCategories
        //   categorySelected={categorySelected}
        //   keyword={keyword}
        //   setKeyword={setKeyword}
        //   onChangeScreen={changeScreen}
        // />;
        return <AllCategories
          onChangeScreen={changeScreen}
          setCategorySelected={setCategorySelected}
          categorySelected={categorySelected} />
      case 'profile':
        return <Profile onChangeScreen={changeScreen} />;
      case 'cart':
        return <Cart onChangeScreen={changeScreen} />;
      default:
        return <Home
          categorySelected={categorySelected}
          setCategorySelected={setCategorySelected}
          onChangeScreen={changeScreen} 
          keyword={keyword}
          setKeyword={setKeyword}
          />;
    }
  };

  if (!fontsLoaded) {
    return null
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {renderScreen()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
    backgroundColor: colors.primary,
  },
});