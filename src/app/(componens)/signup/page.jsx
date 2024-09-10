"use client"
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';





const SignupForm = () => {
    const [allUser, setAllUser] = useState([])
    // Initialize Formik
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Name is required'),
            email: Yup.string()
                .email('Invalid email format')
                .required('Email is required'),
            password: Yup.string()
                .min(6, 'Password must be at least 6 characters long')
                .required('Password is required'),
        }),
        onSubmit: (values) => {
            localStorage.setItem("values", JSON.stringify(values));
            if (localStorage.getItem("values") !== null) {
                values = JSON.parse(localStorage.getItem("values"));
            }
            //   console.log('Form data:', values);

        },

    });

    return (
        <form onSubmit={formik.handleSubmit} className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
            <h2 className="text-2xl font-semibold mb-6">Sign Up</h2>

            <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                {formik.touched.name && formik.errors.name ? (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
                ) : null}
            </div>

            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                {formik.touched.email && formik.errors.email ? (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
                ) : null}
            </div>

            <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                {formik.touched.password && formik.errors.password ? (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
                ) : null}
            </div>

            <button
                type="submit"
                className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
                Sign Up
            </button>
        </form>
    );
};

export default SignupForm;


