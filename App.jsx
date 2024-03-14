import { useFonts } from 'expo-font';
import { Platform, SafeAreaView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { fonts } from './src/global/fonts';
import { colors } from './src/global/colors';
import { Provider } from 'react-redux';
import store from './src/store';
import MainNavigator from './src/navigation/MainNavigator';

export default function App() {
  const [fontsLoaded] = useFonts(fonts)

  if (!fontsLoaded) {
    return null
  }

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <MainNavigator />
      </SafeAreaView>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
    backgroundColor: colors.bg_secundary,
  },
});