"use client"
import { Formik, Form, Field } from "formik"
import css from "./BookingForm.module.css"

interface Values {
    username: string;
    email: string;
    date: string;
    comment: string;
}

const BookingForm = () => {
    const initialValues: Values = {
        username: "",
        email: "",
        date: "",
        comment: ""
    }

    const handleSubmit = async (values: Values) => {
        console.log(values);

    }

    return (
        <>
            <h3 className={css.subtitle}>Book your car now</h3>
            <p className={css.text}>Stay connected! We are always ready to help you.</p>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form>
                    <Field className={css.input} type="text" name="username" placeholder="Name" />
                    <Field className={css.input} type="email" name="email" placeholder="Email" />
                    <Field className={css.input} type="date" name="date" placeholder="Booking date" />
                    <Field className={css.textarea} as="textarea" name="comment" rows={9} placeholder="Comment" />
                    <button className={css.btn} type="submit">Send</button>
                </Form>

            </Formik>

        </>

    )
}

export default BookingForm;