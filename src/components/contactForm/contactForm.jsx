import React from 'react'
import { Formik, ErrorMessage } from 'formik'
import { Form, Field, Button, ErrorMessageField } from './styles'
// import 'corejs/es6/promise'
// import 'corejs/es6/set'
// import 'corejs/es6/map'
import * as yup from 'yup'

export const validationSchema = yup.object({
    name: yup.string().required("What's your name?"),
    email: yup
        .string()
        .required()
        .email('Try this: yourname@example.com'),
    message: yup.string().max(350, "That's a bit too long"),
})

export const ContactForm = () => {
    const handleSubmit = (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
        }, 400)
    }

    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                message: '',
            }}
            validationSchema={validationSchema}
            onSubmit={values => {
                // same shape as initial values
                console.log(values)
            }}
        >
            {({ errors, touched }) => (
                <Form>
                    <Field name="name" />
                    {/* {errors.name && touched.name ? (
                        <div>{errors.name}</div>
                    ) : null} */}
                    <ErrorMessage name="name" />
                    <Field name="email" type="email" />
                    {/* {errors.email && touched.email ? (
                        <div>{errors.email}</div>
                    ) : null} */}
                    <ErrorMessage name="email" />
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    )
}
