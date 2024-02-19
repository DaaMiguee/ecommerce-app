import { useFonts } from "expo-font";
import { fonts } from './src/global/fonts'
import Navigator from "./src/navigation/Navigator";
import { Platform, SafeAreaView, StyleSheet } from 'react-native';
import Constants from "expo-constants";
import { colors } from "./src/global/colors";

export default function App() {
  const [fontsLoaded] = useFonts(fonts)

  if (!fontsLoaded) {
    return null
  }

  return (
    <SafeAreaView style={styles.container}>
      <Navigator/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
    backgroundColor: colors.bg_secundary
  },
});