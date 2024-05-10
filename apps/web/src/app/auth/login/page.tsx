"use client";

import FormInput from "@/components/FormInput";
import useLogin from "@/hooks/api/auth/useLogin";
import { useFormik } from "formik";
import React from "react";
import { validationSchema } from "./validationSchema";

const Login = () => {
  const { login } = useLogin();
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema,

    onSubmit: (values) => {
      login(values);
    },
  });
  return (
    <div className="m-auto grid bg-gray-50 lg:grid-cols-2">
      <div className="flex items-center justify-center  rounded-r-3xl bg-eastern-blue-500 max-md:hidden">
        logo
      </div>
      <div>
        <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
          <div className="w-full max-w-md space-y-8">
            <div>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Sign in to your account
              </h2>
            </div>
            <form className="mt-8 grid gap-y-6" onSubmit={formik.handleSubmit}>
              <FormInput
                name="email"
                error={formik.errors.email}
                isError={!!formik.touched.email && !!formik.errors.email}
                handleBlur={formik.handleBlur}
                handleChange={formik.handleChange}
                placeholder="Email address"
                type="text"
                value={formik.values.email}
                label={"Email"}
              />
              <FormInput
                name="password"
                error={formik.errors.password}
                isError={!!formik.touched.password && !!formik.errors.password}
                handleBlur={formik.handleBlur}
                handleChange={formik.handleChange}
                placeholder="password"
                type="password"
                value={formik.values.password}
                label={"Password"}
              />
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-3 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
