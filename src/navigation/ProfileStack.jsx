import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../screens/Profile";
import ImageSelector from "../screens/ImageSelector";

const ProfileStack = () => {
    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Image Selector" component={ImageSelector} />
        </Stack.Navigator>
    )
}

export default ProfileStack;