import { object, string } from 'yup';

export const loginSchema = object().shape({
    password: string()
        .required('La contraseña es requerida')
        .min(6, 'La contraseña debe tener al menos 6 caracteres'),
    email: string()
        .required('Ingresa tu email registrado')
        .email('El formato de email es inválido'),
});
