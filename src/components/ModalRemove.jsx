import { Text, View, StyleSheet, Pressable, Modal } from "react-native";

const ModalRemove = ({
    modalVisible,
    setModalVisible,
    itemName
}) => {
    const removeItem = () => {
        console.log('eliminado');
        // const filteredArray = cartItems.filter((item) => item.id !== itemSelected);
        // setCartItems(filteredArray);
        setModalVisible(false);
    };

    return (
        <Modal animationType="fade" transparent visible={modalVisible}>
            <View style={styles.modalContainer}>
                <Text style={{textAlign: "center", marginBottom:10}}>{`¿Estás seguro de que deseas eliminar "${itemName}" del carrito?`}</Text>
                <Pressable style={styles.deleteBtn} onPress={removeItem}>
                    <Text style={styles.deleteText}>Eliminar</Text>
                </Pressable>
                <Pressable style={styles.cancelBtn} onPress={() => setModalVisible(false)}>
                    <Text style={styles.cancelText}>Cancelar</Text>
                </Pressable>
            </View>
        </Modal>
    );
};

export default ModalRemove;

const styles = StyleSheet.create({
    modalContainer: {
        position: "absolute",
        bottom:0,
        width: "100%",
        height: 220,
        backgroundColor: "#fff",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        justifyContent: "space-between",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    deleteBtn: {
        backgroundColor: "red",
        borderRadius: 10,
        width: "90%",
        borderColor: "red",
        borderWidth: 1,
    },
    deleteText: {
        color: "#fff",
        padding: 10,
        textAlign:"center"
    },
    cancelBtn: {
        borderRadius: 10,
        width: "90%",
        borderColor: "#000",
        borderWidth: 1,
    },
    cancelText: {
        textAlign:"center",
        padding: 10,
    },
});