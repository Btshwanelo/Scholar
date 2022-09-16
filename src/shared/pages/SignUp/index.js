import { useFormik } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import schools from '../../assets/mock-data/schools.json';
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
      ConfirmPassword: Yup.string().oneOf([Yup.ref('Password'), null], 'Passwords must match')
    }),
    onSubmit: (values) => {
      for (let i = 0; i < schools.length; i++) {
        const element = schools[i];
        if (element.email === values.email) {
          return console.log('User already registerd');
        } else {
          schools.push(values);
          return console.log('User registerd', schools[50]);
        }
      }
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
          error={formik.errors.Name}
          touched={formik.touched.Name}
          fieldprops={formik.getFieldProps('Name')}
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
          type={'number'}
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
          type={'password'}
          id={'password'}
          placeholder={'Password'}
          error={formik.errors.Password}
          touched={formik.touched.Password}
          fieldprops={formik.getFieldProps('Password')}
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
