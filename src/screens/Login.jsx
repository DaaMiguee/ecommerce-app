import { Pressable, StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import InputForm from '../components/InputForm'
import { colors } from '../global/colors'
import { AntDesign } from '@expo/vector-icons';
import SubmitButton from '../components/SubmitButton';
import { loginSchema } from '../validations/loginSchema';
import { useDispatch } from 'react-redux';
import { setUser } from '../features/auth/authSlice';
import { useLoginMutation } from '../services/authService';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMail, setErrorMail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [errorCredentials, setErrorCredentials] = useState('');
    const [triggerLogin, result] = useLoginMutation();

    const onSubmit = async () => {
        setErrorMail('');
        setErrorPassword('');
        setErrorCredentials('');
        try {
            loginSchema.validateSync({ password, email });
            const response = await triggerLogin({ email, password });
            if (response.error) {
                let errorMessage = response.error.data.error.message
                if (errorMessage === 'INVALID_LOGIN_CREDENTIALS') {
                    setErrorCredentials('Las credenciales son inválidas')
                } else if (errorMessage === 'TOO_MANY_ATTEMPTS_TRY_LATER : Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.') {
                    setErrorCredentials('El acceso a esta cuenta se ha deshabilitado temporalmente debido a muchos intentos fallidos de inicio de sesión. Puede restaurarlo inmediatamente restableciendo su contraseña o puede volver a intentarlo más tarde')
                } else if (errorMessage === 'USER_DISABLED') {
                    setErrorCredentials('El usuario ha sido deshabilitado')
                }
            }
        } catch (err) {
            console.log(err);
            switch (err.path) {
                case "email":
                    setErrorMail(err.message);
                    break;
                case "password":
                    setErrorPassword(err.message);
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
        setErrorCredentials('')
    }, [email, password])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Inicia sesión</Text>
            <View style={styles.inputsContainer}>
                <InputForm label='Email' error={errorMail} onChange={setEmail} />
                <InputForm label='Contraseña' error={errorPassword} onChange={setPassword} isSecure={true} />
            </View>
            <Text style={styles.alert}>{errorCredentials}</Text>
            <View style={styles.btnContainer}>
                {result.isLoading ?
                    <SubmitButton onPress={onSubmit} disabled={result.isLoading} >
                        <ActivityIndicator size="large" color={result.isLoading ? 'white' : null} />
                    </SubmitButton> :
                    <SubmitButton onPress={onSubmit} >
                        <AntDesign name='arrowright' size={25} color='white' />
                    </SubmitButton>}
            </View>
            <View style={styles.toRegisterContainer}>
                <Pressable onPress={() => navigation.navigate('Signup')}>
                    <Text style={styles.toRegisterText}>¿No tienes una cuenta? Registrate</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 21,
        justifyContent: 'center',
        gap: 25,
    },
    title: {
        color: colors.text_400,
        fontSize: 30,
        fontWeight: '500',
    },
    btnContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    toRegisterContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    toRegisterText: {
        color: colors.text_300,
        fontSize: 16,
    },
    alert:{
        color: '#856404',
        fontSize: 16,
        textAlign: 'center',
    }
})