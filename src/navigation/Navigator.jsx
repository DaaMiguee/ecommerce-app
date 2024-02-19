import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import Home from "../screens/Home";
import ItemDetail from "../screens/ItemDetail";
import ItemListCategories from "../screens/ItemListCategories";
import Header from "../components/Header";
import AllCategories from "../screens/AllCategories";
import Cart from "../screens/Cart";
import Profile from "../screens/Profile";

const Navigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={() => ({
          header: ({ route }) => {
            const getTitle = () => {
              switch (route.name) {
                case "Home":
                  return "Inicio";
                case "ItemListCategories":
                  return route.params?.category ?? "";
                case "AllCategories":
                  return null;
                case "Cart":
                  return "Carrito de compras";
                case "Profile":
                  return "Perfil";
                default:
                  return null;
              }
            };
            const title = getTitle();
            return <Header title={title} />;
          },
        })}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="ItemListCategories"
          component={ItemListCategories}
        />
        <Stack.Screen name="ItemDetail" component={ItemDetail} />
        <Stack.Screen name="AllCategories" component={AllCategories} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

const styles = StyleSheet.create({});
