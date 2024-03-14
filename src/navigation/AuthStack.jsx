const { createNativeStackNavigator } = require("@react-navigation/native-stack")
import Login from '../screens/Login'
import Signup from '../screens/Signup'

const AuthStack = () =>{
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator
        initialRouteName='Login'
        screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Signup" component={Signup}/>
        </Stack.Navigator>
    )
}

export default AuthStack;