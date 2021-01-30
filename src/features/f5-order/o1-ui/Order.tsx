import React from 'react';
import {Button, createStyles, TextField} from '@material-ui/core';
import {makeStyles, Theme} from '@material-ui/core/styles';
import {ErrorMessage, Field, Form, Formik} from 'formik';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            border: '1px solid black',
            width: '25%',
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '90%',
                paddingLeft: '5px'


            },
        },
    }),
);
type FormikErrorType = {
    email?: string

}
export const Order: React.FC = () => {
    const classes = useStyles();

    return <div className={classes.root}>
        <Formik
            initialValues={{email: '', password: ''}}
            validate={values => {
                const errors: FormikErrorType = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={(values, {setSubmitting}) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({isSubmitting}) => (
                <form >
                    {/*<Field type="email" name="email"/>*/}

                        <TextField
                            id="email"
                            label="email"
                            variant="filled"
                            color="primary"
                            name="email"
                            type="email"


                        />

                    <ErrorMessage name="email" component="div"/>
                    <Field type="password" name="password"/>
                    <ErrorMessage name="password" component="div"/>
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>

                </form>
            )}
        </Formik>
        <div>
            <TextField
                id="firstName"
                label="First Name"
                variant="filled"
                color="primary"
            />
        </div>
        <div>
            <TextField
                id="email"
                label="Email"
                variant="filled"
                color="primary"
            />
        </div>
        <div>
            <TextField
                id="address"
                label="Address"
                variant="filled"
                color="primary"
            />
        </div>
        <div>
            <TextField
                id="message"
                label="Enter your message"
                rows={4}
                rowsMax={4}
                multiline
                variant="filled"
                color="primary"
            />
        </div>

        <div>
            <Button variant="contained" color="primary">
                ORDER
            </Button>
        </div>
    </div>;
};
