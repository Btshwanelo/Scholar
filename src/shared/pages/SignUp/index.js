import { useFormik } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import { TextFieldGroup } from '../../components';
import { FormLayout } from '../../layouts';
import './signup.css';

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      Name: '',
      Email: '',
      Phone: '',
      Address: '',
      Password: '',
      ConfirmPassword: ''
    },
    validationSchema: Yup.object({
      Name: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
      Email: Yup.string().email('Invalid email address').required('Required'),
      //TODO: added phone validation
      Phone: Yup.string().required(),
      //TODO: add address validation
      Address: Yup.string().required(),
      Password: Yup.string()
        .required('No password provided.')
        .min(2, 'Password is too short - should be 8 chars minimum.')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
      //TODO: add confirmpassword validation
      ConfirmPassword: Yup.string().required()
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      //TODO: compare registration email with emails in the schoools, if matches then user already registerd, if doesnt match then register user and route to signi page for user to log in
    }
  });

  return (
    <FormLayout>
      <h4 className="form-title">Sign Up</h4>
      <form onSubmit={formik.handleSubmit} className="form">
        <TextFieldGroup
          label={'Name'}
          type={'text'}
          id={'Name'}
          placeholder={'Name'}
          error={formik.errors.firstName}
          touched={formik.touched.firstName}
          fieldprops={formik.getFieldProps('firstName')}
        />
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
          label={'Phone'}
          type={'text'}
          id={'Phone'}
          placeholder={'Phone'}
          error={formik.errors.Phone}
          touched={formik.touched.Phone}
          fieldprops={formik.getFieldProps('Phone')}
        />
        <TextFieldGroup
          label={'Address'}
          type={'text'}
          id={'Adress'}
          placeholder={'Address'}
          error={formik.errors.Address}
          touched={formik.touched.Address}
          fieldprops={formik.getFieldProps('Address')}
        />
        <TextFieldGroup
          label={'Password'}
          type={'email'}
          id={'email'}
          placeholder={'Email'}
          error={formik.errors.email}
          touched={formik.touched.email}
          fieldprops={formik.getFieldProps('email')}
        />
        <TextFieldGroup
          label={'Confirm Pssword'}
          type={'password'}
          id={'confirm passowrd'}
          placeholder={'Confirm password'}
          error={formik.errors.ConfirmPassword}
          touched={formik.touched.ConfirmPassword}
          fieldprops={formik.getFieldProps('ConfirmPassword')}
        />
        <button type="submit" className="btn btn--blue">
          Submit
        </button>
      </form>
      <small>
        Already have an account ? <Link to={'/signin'}>Sign In</Link>
      </small>
    </FormLayout>
  );
};

export default SignUp;
