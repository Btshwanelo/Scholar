import React from "react";

import * as Yup from "yup";
import { useFormik } from "formik";
import { Link } from "react-router-dom";

import "./signin.css";
import { FormLayout } from "../../layouts";
import { TextFieldGroup } from "../../components/";

const SignIn = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <FormLayout>
      <h4 className="form-title">Sign In</h4>
      <form className="form" onSubmit={formik.handleSubmit}>
        <TextFieldGroup
          label={"First Name"}
          type={"text"}
          id={"firstName"}
          placeholder={"First Name"}
          error={formik.errors.firstName}
          touched={formik.touched.firstName}
          fieldprops={formik.getFieldProps("firstName")}
        />
        <TextFieldGroup
          label={"Email"}
          type={"email"}
          id={"password"}
          placeholder={"Email"}
          error={formik.errors.email}
          touched={formik.touched.email}
          fieldprops={formik.getFieldProps("email")}
        />
        <button type="submit" className="btn btn--blue">
          Submit
        </button>
        <button className="btn btn--grey">Cancel</button>
      </form>
      <small>
        Dont have an account ? <Link to={"/signup"}>Sign Up</Link>
      </small>
    </FormLayout>
  );
};

export default SignIn;
