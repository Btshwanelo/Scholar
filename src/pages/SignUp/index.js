import React from "react";

import { useFormik } from "formik";
import { Link } from "react-router-dom";

import "./signup.css";
import * as Yup from "yup";
import { FormLayout } from "../../Layouts";
import { TextFieldGroup } from "../../components";

const SignUp = () => {
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
      <h4 className="form-title">Sign Up</h4>
      <form onSubmit={formik.handleSubmit} className="form">
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
          label={"last Name"}
          type={"text"}
          id={"lastName"}
          placeholder={"Last Name"}
          error={formik.errors.lastName}
          touched={formik.touched.lastName}
          fieldprops={formik.getFieldProps("lastName")}
        />
        <TextFieldGroup
          label={"Email"}
          type={"email"}
          id={"email"}
          placeholder={"Email"}
          error={formik.errors.email}
          touched={formik.touched.email}
          fieldprops={formik.getFieldProps("email")}
        />
        <button type="submit" className="btn btn--blue">
          Submit
        </button>
        <button className=" btn btn--grey">Cancel</button>
      </form>
      <small>
        Already have an account ? <Link to={"/signin"}>Sign In</Link>
      </small>
    </FormLayout>
  );
};

export default SignUp;
