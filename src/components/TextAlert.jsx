import { StyleSheet, Text } from "react-native";
import { colors } from "../global/colors";

const TextAlert = ({label}) => {
    return (
        <Text style={styles.alert}>{label}</Text>
    )
}
export default TextAlert;

const styles = StyleSheet.create({
    alert: {
        color: colors.alert,
        fontFamily: 'RobotoRegular',
        fontSize: 16,
        textAlign: 'center',
    }
})