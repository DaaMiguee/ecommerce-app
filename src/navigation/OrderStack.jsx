const { createNativeStackNavigator } = require("@react-navigation/native-stack")
import Orders from '../screens/Orders'

const OrderStack = () =>{
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Orders" component={Orders}/>
        </Stack.Navigator>
    )
}

export default OrderStack;