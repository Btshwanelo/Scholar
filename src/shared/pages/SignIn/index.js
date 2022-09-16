import { useFormik } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import schools from '../../assets/mock-data/schools.json';
import { TextFieldGroup } from '../../components/';
import { FormLayout } from '../../layouts';
import './signin.css';

const SignIn = () => {
  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      Email: '',
      Password: ''
    },
    validationSchema: Yup.object({
      Email: Yup.string().email('Invalid email address').required('Email is required'),
      Password: Yup.string()
        .required('No password provided.')
        .min(2, 'Password is too short - should be 8 chars minimum.')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
    }),
    onSubmit: (values) => {
      for (let i = 0; i < schools.length; i++) {
        const school = schools[i];
        if (school.email === values.Email) {
          if (school.password === values.Password) {
            console.log('Password matches, logged In');
            return navigate('/dashboard');
          } else {
            return console.log('Password incorrect');
          }
        } else {
          return console.log('user not found, user not registerd');
        }
      }
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
          error={formik.errors.Email}
          touched={formik.touched.Email}
          fieldprops={formik.getFieldProps('Email')}
        />
        <TextFieldGroup
          label={'Password'}
          type={'password'}
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
