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
                                <Entypo name="home" size={22} color={focused ? colors.focused : colors.text_200} />
                                <Text>Inicio</Text>
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
                                <FontAwesome5 name="shopping-cart" size={22} color={focused ? colors.focused : colors.text_200} />
                                <Text>Carrito</Text>
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
                                <Ionicons name="person" size={22} color={focused ? colors.focused : colors.text_200} />
                                <Text>Perfil</Text>
                            </View>
                        )
                    }
                }} />
            <Tab.Screen name='OrderStack' component={OrderStack}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={styles.iconContainer}>
                                <Octicons name="list-unordered" size={24} color={focused ? colors.focused : colors.text_200} />
                                <Text>Pedidos</Text>
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
        backgroundColor: colors.bg_primary,
        borderTopWidth: 1,
        borderColor: '#f6f6f6',
    },
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    }
})