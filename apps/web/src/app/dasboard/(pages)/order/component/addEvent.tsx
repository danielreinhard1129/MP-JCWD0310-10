"use client";

import React, { useEffect } from "react";
import TypeTicket from "./typeTicket";
import { useFormik } from "formik";
import { values } from "cypress/types/lodash";
import useCreateEvent from "@/hooks/api/dashboard/useCreateEvent";
import { format } from "date-fns";

const AddEvent = () => {
  const { createEvent } = useCreateEvent();
  useEffect(() => {});
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      image: "",
      startDate: "",
      endDate: "",
      location: "",
    },
    onSubmit: (values) => {
      createEvent(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="my-8 h-64 text-sm">
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
              <h1 className="mb-2 font-semibold">Image</h1>
              <input
                name="image"
                type="file"
                accept="image/*"
                onChange={formik.handleChange}
                value={formik.values.image}
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring"
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
            <div className="mb-4">
              <h1 className="mb-2 font-semibold">Start Date</h1>
              <input
                name="startDate"
                type="date"
                onChange={formik.handleChange}
                value={formik.values.startDate}
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div className="mb-4">
              <h1 className="mb-2 font-semibold">End Date</h1>
              <input
                name="endDate"
                type="date"
                onChange={formik.handleChange}
                value={formik.values.endDate}
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div className="mb-4 grid grid-cols-2">
              <div>
                <h1 className="mb-2 font-semibold">Ticket Type</h1>
                <button className=" rounded-md bg-gray-200 px-4 py-2 text-gray-800 hover:bg-gray-300 focus:border-blue-500 focus:outline-none focus:ring">
                  Input
                </button>
                <button className="mx-4 rounded-md bg-gray-200 px-4 py-2 text-gray-800 hover:bg-gray-300 focus:border-blue-500 focus:outline-none focus:ring">
                  View
                </button>
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
