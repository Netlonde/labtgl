import * as yup from 'yup';

const userSchema = yup.object().shape({
  name: yup.string().required('Nome é obrigatório'),
  email: yup.string().required('Email é obrigatório')
}).required()

export default userSchema;
