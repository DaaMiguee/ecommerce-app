import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import InputForm from '../components/InputForm';
import { useSignUpMutation } from '../services/authService';
import SubmitButton from '../components/SubmitButton';
import { useDispatch } from 'react-redux';
import { setUser } from '../features/auth/authSlice';
import { signupSchema } from '../validations/signupSchema';
import { colors } from '../global/colors';
import { AntDesign } from '@expo/vector-icons';

const Signup = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMail, setErrorMail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [errorConfirmPassword, setErrorConfirmPassword] = useState('');
    const [triggerSignup, result] = useSignUpMutation();

    const onSubmit = async () => {
        try {
            setErrorMail('');
            setErrorPassword('');
            setErrorConfirmPassword('');

            signupSchema.validateSync({ password, confirmPassword, email });
            const response = await triggerSignup({ email, password });
            if (response.error) {
                let errorMessage = response.error.data.error.message
                if (errorMessage === 'EMAIL_EXISTS') {
                    setErrorMail('El email ya está registrado')
                }
            }
        } catch (err) {
            switch (err.path) {
                case "email":
                    setErrorMail(err.message);
                    break;
                case "password":
                    setErrorPassword(err.message);
                    break;
                case "confirmPassword":
                    setErrorConfirmPassword(err.message);
                    break;
                default:
                    break;
            }
        }
    };

    const dispatch = useDispatch()

    useEffect(() => {
        if (result.data) {
            dispatch(setUser(result.data))
        }
    }, [result])

    useEffect(() => {
        setErrorMail('');
        setErrorPassword('');
        setErrorConfirmPassword('');
    }, [email, password, confirmPassword])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registrate</Text>
            <View style={styles.inputsContainer}>
                <InputForm label='Email' error={errorMail} onChange={setEmail} />
                <InputForm label='Contraseña' error={errorPassword} onChange={setPassword} isSecure={true} />
                <InputForm label='Confirma la contraseña' error={errorConfirmPassword} onChange={setConfirmPassword} isSecure={true} />
            </View>
            <View style={styles.btnContainer}>
                <SubmitButton disabled={result.isLoading} onPress={onSubmit}>
                    {result.isLoading ?
                        <ActivityIndicator size="large" color={result.isLoading ? 'white' : null} />
                        :
                        <AntDesign name='arrowright' size={30} color='white' />
                    }
                </SubmitButton>
            </View>
            <View style={styles.goLoginContainer}>
                <Pressable onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.goLoginText}>¿Ya tienes una cuenta? Inicia sesión</Text>
                </Pressable>
            </View>
        </View>
    )
}
export default Signup

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 21,
        justifyContent: 'center',
        gap: 25,
    },
    inputsContainer: {
        gap: 15,
    },
    title: {
        fontFamily: 'RobotoRegular',
        color: colors.text_100,
        fontSize: 30,
        fontWeight: '500',
    },
    btnContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    goLoginContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    goLoginText: {
        fontFamily: 'RobotoRegular',
        color: colors.text_200,
        fontSize: 16,
    },
})