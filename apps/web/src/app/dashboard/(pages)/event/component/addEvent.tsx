"use client";

import Dropzone from "@/app/dashboard/components/Dropzone";
import PreviewImages from "@/app/dashboard/components/PreviewImages";
import useCreateEvent from "@/hooks/api/dashboard/useCreateEvent";
import { useAppSelector } from "@/redux/hooks";
import { useFormik } from "formik";

const AddEvent = () => {
  const { createEvent } = useCreateEvent();
  const { id } = useAppSelector((state) => state.user);

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      image: [],
      startDate: "",
      endDate: "",
      location: "",
      categories: "",
    },
    onSubmit: (values) => {
      createEvent({ ...values, userId: id });
    },
  });
  console.log(formik);

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="my-8 h-64 text-sm font-medium">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="mb-4">
              <h1 className="mb-2 font-semibold">Name</h1>
              <input
                name="name"
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring"
                placeholder="Enter name"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
            </div>
            <div className="mb-4">
              <h1 className="mb-2 font-semibold">Description</h1>
              <input
                name="description"
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring"
                placeholder="Enter description"
                onChange={formik.handleChange}
                value={formik.values.description}
              />
            </div>
            <div className="mb-4">
              <PreviewImages
                onRemoveImage={(idx) => {
                  formik.setFieldValue(
                    "image",
                    formik.values.image.filter((_, i) => i !== idx),
                  );
                }}
                fileImages={formik.values.image}
              />
              <Dropzone
                isError={Boolean(formik.errors.image)}
                label="image"
                onDrop={(files) =>
                  formik.setFieldValue("image", [
                    ...formik.values.image,
                    ...files.map((file) => file),
                  ])
                }
              />
            </div>
          </div>
          <div>
            <div className="mb-4">
              <h1 className="mb-2 font-semibold">Location</h1>
              <input
                name="location"
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring"
                placeholder="Enter your location"
                onChange={formik.handleChange}
                value={formik.values.location}
              />
            </div>
            <div className="flex gap-4">
              {" "}
              <div className="mb-4">
                <h1 className="mb-2 font-semibold">Start Date</h1>
                <input
                  name="startDate"
                  type="datetime-local"
                  onChange={formik.handleChange}
                  value={formik.values.startDate}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
              <div className="mb-4">
                <h1 className="mb-2 font-semibold">End Date</h1>
                <input
                  name="endDate"
                  type="datetime-local"
                  onChange={formik.handleChange}
                  value={formik.values.endDate}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
            </div>
            <div className="mb-4">
              <h1 className="mb-2 font-semibold">Categories</h1>

              <div className="relative ">
                <select
                  name="categories"
                  className="rounded-md border border-gray-300 bg-gray-100 p-2 text-base"
                  onChange={formik.handleChange}
                  value={formik.values.categories}
                >
                  <option className="font-medium text-gray-700" value="sports">
                    Sports
                  </option>
                  <option className="font-medium text-gray-700" value="music">
                    Music
                  </option>
                  <option className="font-medium text-gray-700" value="art">
                    Art
                  </option>
                </select>
              </div>
            </div>
            <div className="mb-4 grid grid-cols-2">
              <div>
                <h1 className="mb-2 font-semibold">Ticket Type</h1>
              </div>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="rounded-full bg-blue-500 px-6 py-3 font-semibold text-white hover:bg-blue-700 focus:border-blue-500 focus:outline-none focus:ring"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default AddEvent;
