import React, { useContext, useRef } from 'react'
import axios from 'axios'
import { AuthContext } from '../../context/AuthoContext'
import { MeContext } from '../../context/MeContext'
import { Link } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import '../Login/login.css'

const Register = () => {
  const { token, setToken } = useContext(AuthContext)
  const { me, setMe } = useContext(MeContext)


  // const password = useRef()

  const initialValues = {
    name: '',
    surName: '',
    email: '',
    password: '',
  }

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required!'),
    password: Yup.string()
      .min(3, 'This is a short password')
      .max(8, 'This is a long password')
      .required('Required!'),
    name: Yup.string().required('Required!'),
    surName: Yup.string().required('Required!'),
  })
  // const btnEye = () => {
  //   if (password.current.type == 'password') {
  //     password.current.type = 'text'
  //   } else {
  //     password.current.type = 'password'
  //   }
  // }
  const onSubmit = (values) => {
    axios
      .post('http://localhost:8080/register', {
        email: values.email,
        password: values.password,
        firstname: values.name,
        lastname: values.surName,
      })
      .then((res) => {
        if (res.status === 201) {
          setToken(res.data.accessToken)
          setMe(res.data.user)
        }
      })
      .catch((error) => console.log(error))
  }

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(formik) => {
          return (
            <form className="w-50 mx-auto mt-5 p-5 shadow login-form">
              <h2 className="mb-3 text-center">Register</h2>
              <p className="text-center">
                Sizda account bormi? <Link to="/login">Sign in</Link>
              </p>
              <Field
                className="mb-3 form-control form-input"
                type="text"
                name="name"
                placeholder="Name..."
              />
              <ErrorMessage
                component="span"
                className="text-danger active-box"
                name="name"
              />
              <Field
                className="my-3 form-control form-input"
                type="text"
                name="surName"
                placeholder="Surname..."
              />
              <ErrorMessage
                component="span"
                className="text-danger active-box"
                name="surName"
              />
              <Field
                className="my-3 form-control form-input"
                type="email"
                name="email"
                placeholder="Email..."
              />
              <ErrorMessage
                component="span"
                className="text-danger active-box"
                name="email"
              />
              <Field
                className="my-3 form-control form-input"
                type="password"
                name="password"
                placeholder="Password..."
                // ref={password}
              />
              <div className="box-eye">
                <ErrorMessage
                  component="span"
                  className="text-danger active-box"
                  name="password"
                />
                <button
                  className="form-btn-eye"
                  type="button"
                  // onClick={btnEye}
                ></button>
              </div>
              <button
                className="mx-auto d-block form-btn"
                disabled={!formik.dirty || !formik.isValid}
                type="submit"
              >
                Register
              </button>
            </form>
          )
        }}
      </Formik>
    </>
  )
}

export default Register
