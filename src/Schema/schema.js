import * as yup from 'yup';

export const schema = yup.object().shape({
  status: yup.string().required('Selecione uma opção!'),
  tags: yup
    .array()
    .of(yup.string())
    .when('status', {
      is: 'reprovado',
      then: (schema) =>
        schema.when('comment', {
          is: '',
          then: (schema) =>
            schema
              .min(1, 'Selecione ao menos uma tag, ou deixe um comentário!')
              .required('Selecione ao menos uma tag!'),
        }),
    }),
  comment: yup.string().when('status', {
    is: 'reprovado',
    then: (schema) =>
      schema.when('tags', {
        is: [],
        then: schema
          .min(20, 'Deixe um comentário!')
          .required('Deixe um comentário!'),
      }),
  }),
});
