import * as yup from 'yup';

export const schema = yup.object().shape({
  status: yup.string().required('Escolha uma opção!'),
});
