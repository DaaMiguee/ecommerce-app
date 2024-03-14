import { object, string, ref } from 'yup'

export const signupSchema = object().shape({
    confirmPassword: string().oneOf([ref('password'), null], 'Las contraseñas no coinciden')
        .required('Confirma la contraseña'),
    password: string()
        .required('La contraseña es requerida')
        .min(6, 'La contraseña requiere al menos 6 carácteres'),
    email: string()
        .required('El email es requerido')
        .email('El email es invalido'),
})