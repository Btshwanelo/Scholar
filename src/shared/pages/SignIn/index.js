import { useFormik } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import schools from '../../assets/mock-data/schools.json';
import { TextFieldGroup } from '../../components/';
import { FormLayout } from '../../layouts';
import './signin.css';

const SignIn = () => {
  const schools = schools;
  const formik = useFormik({
    initialValues: {
      Email: '',
      Password: ''
    },
    validationSchema: Yup.object({
      Email: Yup.string().email('Invalid email address').required('Required'),
      Password: Yup.string()
        .required('No password provided.')
        .min(2, 'Password is too short - should be 8 chars minimum.')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      //TODO: loop through schools and compare emails with the logging email, if the email matches one then compare passwords,
      //TODO: if email doesnt match any then user is not registered, if email and password matches then route to dashboard
    }
  });

  return (
    <FormLayout>
      <h4 className="form-title">Sign In</h4>
      <form className="form" onSubmit={formik.handleSubmit}>
        <TextFieldGroup
          label={'Email'}
          type={'email'}
          id={'Email'}
          placeholder={'Email'}
          error={formik.errors.email}
          touched={formik.touched.email}
          fieldprops={formik.getFieldProps('email')}
        />
        <TextFieldGroup
          label={'Password'}
          type={'text'}
          id={'Password'}
          placeholder={'Password'}
          error={formik.errors.Password}
          touched={formik.touched.Password}
          fieldprops={formik.getFieldProps('Password')}
        />
        <button type="submit" className="btn btn--blue">
          Submit
        </button>
      </form>
      <small>
        Dont have an account ? <Link to={'/signup'}>Sign Up</Link>
      </small>
    </FormLayout>
  );
};

export default SignIn;
