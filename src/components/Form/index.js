import React from 'react';
import {
  Button, MenuItem,
} from '@material-ui/core';
import {
  Formik, Form as FormikForm, Field,
} from 'formik';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import { TextField as TF, Select as SL } from 'formik-material-ui';

import {
  Form as FormStyle,
} from './style';
import { ErrorLabel } from '../ErrorLabel/style';

const validations = yup.object().shape({
  name: yup.string().required('O nome é obrigatório'),
  email: yup.string().required('O email é obrigatório'),
  subject: yup.string().required('O assunto é obrigatório'),
  phone: yup.string().trim().matches(/^\([0-9]{2}\) [0-9]?[0-9]{4}-[0-9]{4}$/, 'Telefone inválido. O formato deve ser: (XX) XXXX-XXXX'),
  body: yup.string().required('O corpo da mensagem é obrigatório'),
});

const MessageForm = ({ initialValues, handleSubmit, subjects }) => (
  <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validations}>
    {({ values, errors, touched }) => (
      <FormStyle>
        <FormikForm>
          <Field name="name" component={TF} variant="outlined" label="Nome" />
          <Field name="email" component={TF} variant="outlined" label="Email" />
          <Field name="phone" component={TF} variant="outlined" label="Telefone" />
          <Field
            name="subject"
            component={SL}
            variant="outlined"
            label="Telefone"
            displayEmpty
            helperText={touched.subject ? errors.subject : ''}
            error={touched.subject && Boolean(errors.subject)}
          >
            <MenuItem value="">Selecione o assunto</MenuItem>
            {subjects.map((subj) => <MenuItem key={subj.id} value={subj.description}>{subj.description}</MenuItem>)}
          </Field>
          {errors.subject
              && touched.subject
              && (
                <ErrorLabel>
                  {errors.subject}
                </ErrorLabel>
              )}
          <Field
            name="body"
            component={TF}
            variant="outlined"
            label="Mensagem"
            placeholder="Digite sua mensagem aqui"
            multiline
            rows={2}
            rowsMax={4}
            inputProps={{
              maxLength: 500,
            }}
          />

          <p>{values.body != null ? `${values.body.length}/500` : '0/500'}</p>

          <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
        </FormikForm>
      </FormStyle>
    )}


  </Formik>
);

MessageForm.propTypes = {
  initialValues: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  subjects: PropTypes.array.isRequired,
};
export default MessageForm;
