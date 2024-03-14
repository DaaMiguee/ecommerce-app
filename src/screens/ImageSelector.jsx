import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { useDispatch, useSelector } from "react-redux";
import { setProfileImage } from "../features/auth/authSlice";
import { usePostProfileImageMutation } from "../services/shopService";
import { FontAwesome, Entypo } from '@expo/vector-icons';

const ImageSelector = ({ navigation }) => {
    const [image, setImage] = useState(null);
    const localId = useSelector((state) => state.authReducer.value.localId);
    const [triggerSaveProfileImage, result] = usePostProfileImageMutation();
    const dispatch = useDispatch();

    const verifyCameraPermissions = async () => {
        const { granted } = await ImagePicker.requestCameraPermissionsAsync();
        if (!granted) {
            return false;
        }
        return true;
    };

    const pickImage = async () => {
        const isCameraOk = await verifyCameraPermissions();
        if (isCameraOk) {
            let result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [9, 16],
                base64: true,
                quality: 1,
            });
            if (!result.canceled) {
                setImage(result.assets[0].uri);
            }else{
                console.log('Permisos de camara denegados');
            }
        }
    };

    const confirmImage = () => {
        dispatch(setProfileImage(image));
        triggerSaveProfileImage({ localId, image});
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            {image ? (
                <>
                    <View style={styles.imageContainer}>
                        <Image source={{ uri: image }} style={styles.image} />
                    </View>
                    <View style={styles.buttonsContainer}>
                        <Pressable onPress={pickImage} style={styles.ButtonWithIcon}>
                            <Text style={styles.text}>Tomar otra foto</Text>
                            <FontAwesome name="camera" size={24} color="black" />

                        </Pressable>
                        <Pressable onPress={confirmImage} style={styles.ButtonWithIcon}>
                            <Text style={styles.text}>Confirmar</Text>
                            <Entypo name="level-up" size={24} color="black" />
                        </Pressable>
                    </View>
                </>
            ) : (
                <View style={styles.noPhotoContainer}>
                    <Pressable onPress={pickImage}>
                        <Text>Tomar una foto</Text>
                    </Pressable>
                </View>
            )}
        </View>
    );
};

export default ImageSelector;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 21,
        gap: 20,
    },
    imageContainer:{
        width: 200,
        height: 200,
        overflow: 'hidden',
        borderRadius: 16,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    noPhotoContainer: {
        borderRadius: 16,
        borderWidth: 2,
        padding: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonsContainer: {
        backgroundColor: '#c2c2c2',
        padding: 20,
        gap: 25,
        width: '100%'
    },
    ButtonWithIcon:{
        flexDirection:'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#8f8f8f',
    },
    text: {
        fontSize: 16,
    },
});