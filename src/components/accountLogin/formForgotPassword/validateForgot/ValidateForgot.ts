import * as yup from 'yup';

const forgotSchema = yup.object().shape({
  email: yup.string().required('Email é obrigatório'),
}).required()

export default forgotSchema;
