"use client";

import FormInput from "@/components/FormInput";
import useLogin from "@/hooks/api/auth/useLogin";
import { useFormik } from "formik";
import React from "react";
import { validationSchema } from "./validationSchema";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Login = () => {
  const { login } = useLogin();
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema,

    onSubmit: (values) => {
      login(values);
    },
  });
  const Router = useRouter();
  return (
    <div className=" m-auto grid bg-gray-50 md:grid-cols-3">
      <div className="col-span-2 flex flex-col items-center bg-eastern-blue-500  max-md:hidden">
        <div className=" mr-24 mt-20 flex w-2/3 flex-col items-center 2xl:w-[700px]   ">
          <h1 className="mb-8 text-4xl font-bold text-gray-50">
            Experience an electrifying event that will mesmerize.
          </h1>
          <div className="flex gap-4 brightness-100 grayscale-0">
            <div className="grid gap-y-4 ">
              <div className="mr-20 flex gap-4">
                <Image
                  src={"/images/img2l.jpg"}
                  alt="image"
                  width={150}
                  height={150}
                  className="  transform rounded-lg shadow-lg transition-transform hover:scale-105"
                />
                <Image
                  src={"/images/img4l.jpg"}
                  alt="image"
                  width={150}
                  height={150}
                  className="  transform rounded-lg shadow-lg transition-transform hover:scale-105"
                />
              </div>

              <Image
                src={"/images/img4.jpg"}
                alt="image"
                width={300}
                height={300}
                className="ml-4 transform rounded-lg shadow-lg transition-transform hover:scale-105"
              />
            </div>

            <div className="grid gap-y-3">
              <Image
                src={"/images/img1.jpg"}
                alt="image"
                width={300}
                height={300}
                className="transform rounded-lg shadow-lg transition-transform hover:scale-105"
              />
              <Image
                src={"/images/img3l.jpg"}
                alt="image"
                width={200}
                height={200}
                className="transform rounded-lg shadow-lg transition-transform hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className=" relative flex min-h-screen items-center justify-center bg-[#E4E6EB] px-4 py-12 sm:px-6 lg:px-8">
          <div className="absolute w-[320px]  max-w-md space-y-8 rounded-2xl border-solid  bg-gray-50 p-8 md:-left-40">
            <div>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                logo
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
                className="group relative my-4 flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-3 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Sign in
              </button>

              <div className="flex justify-center text-center">
                Don't have account?{" "}
                <div
                  onClick={() => {
                    Router.push("/auth/register");
                  }}
                >
                  Register
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
