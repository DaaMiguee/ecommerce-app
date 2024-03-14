const { createNativeStackNavigator } = require("@react-navigation/native-stack")
import Profile from '../screens/Profile'

const MyProfileStack = () =>{
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator
        initialRouteName='Profile'
        screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Profile" component={Profile}/>
        </Stack.Navigator>
    )
}

export default MyProfileStack;