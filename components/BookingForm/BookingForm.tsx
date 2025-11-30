"use client"
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik"
import * as Yup from "yup"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import css from "./BookingForm.module.css"
import DatePickerField from "../DatePickerField/DatePickerField"

interface Values {
    username: string;
    email: string;
    date: string;
    comment: string;
}

const validationSchema = Yup.object({
    username: Yup.string()
        .min(2, "Name must be at least 2 characters")
        .max(50, "Name must be less than 50 characters")
        .required("Name is required"),
    email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    date: Yup.string()
        .required("Booking date is required"),
    comment: Yup.string()
        .max(500, "Comment must be less than 500 characters")
});

const BookingForm = () => {
    const initialValues: Values = {
        username: "",
        email: "",
        date: "",
        comment: ""
    }

    const handleSubmit = async (values: Values, { resetForm }: FormikHelpers<Values>) => {
        console.log(values);

        try {
            await new Promise(resolve => setTimeout(resolve, 500));

            toast.success("🚗 Car successfully booked! We'll contact you soon.", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });

            resetForm();
        } catch {
            toast.error("Something went wrong. Please try again.", {
                position: "top-right",
                autoClose: 5000,
            });
        }
    }

    return (
        <>
            <ToastContainer />
            <h3 className={css.subtitle}>Book your car now</h3>
            <p className={css.text}>Stay connected! We are always ready to help you.</p>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                <Form>
                    <div className={css.fieldWrapper}>
                        <Field className={css.input} type="text" name="username" placeholder="Name*" />
                        <ErrorMessage name="username" component="div" className={css.error} />
                    </div>
                    <div className={css.fieldWrapper}>
                        <Field className={css.input} type="email" name="email" placeholder="Email*" />
                        <ErrorMessage name="email" component="div" className={css.error} />
                    </div>
                    <div className={css.fieldWrapper}>
                        <DatePickerField name="date" placeholder="Booking date" className={css.input} />
                        <ErrorMessage name="date" component="div" className={css.error} />
                    </div>
                    <div className={css.fieldWrapper}>
                        <Field className={css.textarea} as="textarea" name="comment" rows={9} placeholder="Comment" />
                        <ErrorMessage name="comment" component="div" className={css.error} />
                    </div>
                    <button className={css.btn} type="submit">Send</button>
                </Form>

            </Formik>

        </>

    )
}

export default BookingForm;