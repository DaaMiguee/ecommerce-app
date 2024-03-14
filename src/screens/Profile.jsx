import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { FontAwesome } from '@expo/vector-icons';
import { colors } from "../global/colors";

const Profile = ({ navigation }) => {
    const image = useSelector((state) => state.authReducer.value.profileImage);

    const logout = () => {
        console.log('logged out');
    }

    return (
        <View style={styles.container}>
            {image ? (
                <View>
                    <Pressable style={styles.imageContainer} onPress={() => navigation.navigate("Image Selector")}>
                        <Image
                            source={{ uri: image }}
                            resizeMode="cover"
                            style={styles.image}
                        />
                    </Pressable>
                    <FontAwesome
                        onPress={() => navigation.navigate("Image Selector")}
                        style={styles.changeImageIcon} name="camera" size={24} color="black"
                    />
                </View>
            ) : (
                <Pressable style={styles.imageContainer} onPress={() => navigation.navigate("Image Selector")}>
                    <Image
                        source={require("../../assets/defaultProfile.png")}
                        style={styles.image}
                        resizeMode="cover"
                    />
                    <FontAwesome
                        onPress={() => navigation.navigate("Image Selector")}
                        style={styles.changeImageIcon} name="camera" size={24} color="black"
                    />
                </Pressable>
            )}
            <Pressable style={styles.logoutBtn} onPress={logout}>
                <Text style={styles.logoutText}>Cerrar sesión</Text>
            </Pressable>
        </View>
    );
};

export default Profile;

const styles = StyleSheet.create({
    container: {
        padding: 10,
        gap: 15,
        alignItems: "center",
        justifyContent: "flex-start",
    },
    imageContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        position: 'relative',
        borderWidth: 2,
        borderColor: '#fff',
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    changeImageIcon: {
        position: "absolute",
        bottom: 0,
        right: 0,
        backgroundColor: '#c2c2c2',
        padding: 5,
        borderRadius: 50,
    },
    logoutBtn: {
        borderRadius: 8,
        backgroundColor: colors.bg_dark,
    },
    logoutText: {
        fontFamily: 'RobotoRegular',
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.text_100,
        textAlign: 'center',
        padding: 15,
    },
});