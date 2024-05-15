"use client";

import FormInput from "@/components/FormInput";
import useRegister from "@/hooks/api/auth/useRegister";
import { useFormik } from "formik";

const Register = () => {
  const { register } = useRegister();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      referralCode: "",
      role: "user",
    },

    onSubmit: (values) => {
      register(values);
    },
  });
  console.log(formik.errors);
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="m-auto grid bg-gray-50 md:grid-cols-3">
        <div className="col-span-2 flex flex-col items-center bg-eastern-blue-500  max-md:hidden ">
          <div className="mr-24 mt-20 flex w-2/3 flex-col items-center 2xl:w-[700px]  ">
            <h1 className="mb-8 text-4xl font-bold text-gray-50">
              Experience an electrifying event that will mesmerize.
            </h1>
            <div className="w-2/3">
              {/* <Image src="/img1.jpg" width={500} height={500} alt="image" /> */}
              {/* <img src="gambar-event.jpg" alt="Event Image" class="w-full rounded-lg shadow-lg hover:scale-105 transition duration-300"> */}
            </div>
          </div>
        </div>
        <div>
          <div className="relative flex min-h-screen items-center justify-center bg-[#E4E6EB] px-4 py-12 sm:px-6 lg:px-8">
            <div className=" absolute w-[350px] max-w-md space-y-8 rounded-3xl border-solid  bg-gray-50 p-4 px-8 md:-left-40">
              <div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                  logo
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
                {/* Logic sembunyikan refferal code khusus user Organizer */}
                <div className="grid grid-cols-2 ">
                  <div>
                    {" "}
                    <div className="py-2">
                      <select
                        name="role"
                        className="rounded-md border border-gray-300 bg-gray-100 p-2 text-base"
                        onChange={formik.handleChange}
                        value={formik.values.role}
                      >
                        <option className="text-gray-700" value="user">
                          User
                        </option>
                        <option className="text-gray-700" value="organizer">
                          Organizer
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="flex items-center">
                    {formik.values.role == "user" ? (
                      <FormInput
                        name="referralCode"
                        error={formik.errors.referralCode}
                        isError={
                          !!formik.touched.referralCode &&
                          !!formik.errors.referralCode
                        }
                        handleBlur={formik.handleBlur}
                        handleChange={formik.handleChange}
                        placeholder="Referal Code"
                        type="text"
                        value={formik.values.referralCode}
                        label={""}
                      />
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <button
                  type="submit"
                  className="group relative my-4 flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-3 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Sign Up
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
