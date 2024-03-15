import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import ShopStack from '../navigation/ShopStack';
import CartStack from '../navigation/CartStack';
import ProfileStack from '../navigation/ProfileStack';
import OrderStack from '../navigation/OrderStack';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Entypo, FontAwesome5, Ionicons, Octicons } from '@expo/vector-icons';
import { colors } from '../global/colors';


const TabNavigator = () => {
    const Tab = createBottomTabNavigator()
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar,
            }}
        >
            <Tab.Screen name='ShopStack' component={ShopStack}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={styles.iconContainer}>
                                <Entypo name="home" size={22} color={focused ? colors.text_100 : colors.text_200} />
                                <Text style={focused ? styles.textFocused : styles.text}>Inicio</Text>
                            </View>
                        )
                    }
                }}
            />
            <Tab.Screen name='CartStack' component={CartStack}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={styles.iconContainer}>
                                <FontAwesome5 name="shopping-cart" size={22} color={focused ? colors.text_100 : colors.text_200} />
                                <Text style={focused ? styles.textFocused : styles.text}>Carrito</Text>
                            </View>
                        )
                    }
                }}
            />
            <Tab.Screen name='ProfileStack' component={ProfileStack}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={styles.iconContainer}>
                                <Ionicons name="person" size={22} color={focused ? colors.text_100 : colors.text_200} />
                                <Text style={focused ? styles.textFocused : styles.text}>Perfil</Text>
                            </View>
                        )
                    }
                }} />
            <Tab.Screen name='OrderStack' component={OrderStack}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={styles.iconContainer}>
                                <Octicons name="list-unordered" size={24} color={focused ? colors.text_100 : colors.text_200} />
                                <Text style={focused ? styles.textFocused : styles.text}>Pedidos</Text>
                            </View>
                        )
                    }
                }} />
        </Tab.Navigator>
    )
}

export default TabNavigator;

const styles = StyleSheet.create({
    tabBar: {
        height: Platform.OS === 'ios' ? 85 : 66,
        backgroundColor: colors.bg_100,
        borderTopWidth: 1,
        borderColor: '#d6d6d6',
    },
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        fontFamily: 'RobotoRegular',
        fontSize: 14,
        color: colors.text_200,
    },
    textFocused:{
        fontFamily: 'RobotoRegular',
        fontSize: 14,
        color: colors.text_100,
    }
})