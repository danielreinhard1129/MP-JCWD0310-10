"use client";

import FormInput from "@/components/FormInput";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useRegister from "@/hooks/api/auth/useRegister";
import { useFormik } from "formik";
import { ChangeEvent, useState } from "react";
import { validationSchema } from "./validationSchema";

const Register = () => {
  const { register } = useRegister();
  const [selectedRole, setSelectedRole] = useState("");

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      referalCode: "",
      role: "",
    },
    validationSchema,

    onSubmit: (values) => {
      values.role = selectedRole;
      console.log(values);
      register(values);
    },
  });
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedRole(value);
    console.log(value);
  };
  return (
    <form onSubmit={formik.handleSubmit}>
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
              <div className="mt-8 grid gap-y-4">
                <FormInput
                  name="username"
                  error={formik.errors.username}
                  isError={
                    !!formik.touched.username && !!formik.errors.username
                  }
                  handleBlur={formik.handleBlur}
                  handleChange={formik.handleChange}
                  placeholder="Username"
                  type="text"
                  value={formik.values.username}
                  label={"Username"}
                />
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
                />{" "}
                <FormInput
                  name="password"
                  error={formik.errors.password}
                  isError={
                    !!formik.touched.password && !!formik.errors.password
                  }
                  handleBlur={formik.handleBlur}
                  handleChange={formik.handleChange}
                  placeholder="password"
                  type="password"
                  value={formik.values.password}
                  label={"Password"}
                />
                <FormInput
                  name="referalCode"
                  error={formik.errors.referalCode}
                  isError={
                    !!formik.touched.referalCode && !!formik.errors.referalCode
                  }
                  handleBlur={formik.handleBlur}
                  handleChange={formik.handleChange}
                  placeholder="referalCode"
                  type="text"
                  value={formik.values.referalCode}
                  label={"Referal Code"}
                />
                <div className="py-2">
                  <select
                    className="rounded-md border border-gray-300 bg-gray-100 p-2 text-base"
                    onChange={handleChange}
                  >
                    <option className="text-gray-700" value={"user"}>
                      User
                    </option>
                    <option className="text-gray-700" value={"customer"}>
                      Customer
                    </option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-3 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Register;
