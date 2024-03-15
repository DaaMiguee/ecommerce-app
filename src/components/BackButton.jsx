import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { colors } from "../global/colors";

const BackButton = ({ navigation }) => {
    return (
        <Pressable style={styles.backButton} onPress={() => navigation.goBack()} >
            <Ionicons name="arrow-back" size={35} color={colors.text_200} />
        </Pressable>
    )
}

export default BackButton;

const styles = StyleSheet.create({
    backButton: {
        position: 'absolute',
        left: 21,
        top: 0,
        zIndex: 1,
    },
})