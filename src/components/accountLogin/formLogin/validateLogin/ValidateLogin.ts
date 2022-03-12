import * as yup from 'yup';

const loginSchema = yup.object().shape({
  email: yup.string().required('Email é obrigatório'),
  password: yup.string().required('Senha é obrigatória')
    .min(6, 'Senha precisa ter entre 6 e 18 caracteres')
    .max(18, 'Senha precisa ter entre 6 e 18 caracteres')
}).required()

export default loginSchema;
