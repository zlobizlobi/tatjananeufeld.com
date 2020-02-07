import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import { Form, Field, Button, FieldContainer, ErrorWrapper } from './styles';
import * as yup from 'yup';

export const validationSchema = yup.object({
    name: yup.string().required("What's your name?"),
    email: yup
        .string()
        .required('Your e-mail is required')
        .email('Try this:  yourname@example.com'),
    message: yup.string().max(350, "That's a bit too long, max 350 words"),
});

const handleSubmit = (values, { resetForm }) => {
    return fetch('https://api.formik.com/submit/tatjana-neufeld/contact-form', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
    })
        .then(() => {
            resetForm({});
        })
        .catch(err => {
            alert('Error, please try again later');
            console.log(err);
        });
};

export const ContactForm = () => (
    <Formik
        initialValues={{
            name: '',
            email: '',
            message: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
    >
        {({ isSubmitting, errors, touched }) => {
            console.log(touched);
            return (
                <Form>
                    <FieldContainer>
                        <Field
                            name="name"
                            type="text"
                            error={touched.name && errors.name}
                            placeholder="Full name"
                        />
                        <ErrorWrapper>
                            <ErrorMessage name="name" />
                        </ErrorWrapper>
                    </FieldContainer>
                    <FieldContainer>
                        <Field
                            name="email"
                            type="email"
                            error={touched.email && errors.email}
                            placeholder="Email address"
                        />
                        <ErrorWrapper>
                            <ErrorMessage name="email" />
                        </ErrorWrapper>
                    </FieldContainer>
                    <FieldContainer>
                        <Field
                            name="message"
                            component="textarea"
                            error={touched.message && errors.message}
                            placeholder="Write a message here..."
                            style={{ minHeight: '150px', resize: 'none' }}
                        />
                        <ErrorWrapper>
                            <ErrorMessage name="message" />
                        </ErrorWrapper>
                    </FieldContainer>
                    <Button type="submit" disabled={isSubmitting}>
                        Send
                    </Button>
                </Form>
            );
        }}
    </Formik>
);
