import axios from 'axios'
import React, { useContext, useRef } from 'react'
import { AuthContext } from '../../context/AuthoContext'
import { MeContext } from '../../context/MeContext'
import { Link, useNavigate } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import './login.css'

export const Login = () => {
  const { token, setToken } = useContext(AuthContext)
  const { me, setMe } = useContext(MeContext)

  // const password = useRef()

  const navigate = useNavigate()

  const initialValues = {
    email: '',
    password: '',
  }

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required!'),
    password: Yup.string()
      .min(3, 'This is a short password')
      .max(8, 'This is a long password')
      .required('Required!'),
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
      .post('http://localhost:8080/login', {
        email: values.email,
        password: values.password,
      })
      .then((res) => {
        if (res.status === 200) {
          setToken(res.data.accessToken)
          setMe(res.data.user)
          navigate('/')
        }
      })
      .catch((error) => console.log(error))
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => {
        return (
          <Form className="w-50 mx-auto mt-5 p-5 shadow login-form">
            <h2 className="mb-3 text-center">Login</h2>
            <p className="text-center">
              Sizda account yo'qmi? <Link to="/register">Sign up</Link>
            </p>
            <Field
              className="mb-3 form-control form-input"
              type="email"
              name="email"
              placeholder="Email..."
              // value={formik.values.email}
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              // {...formik.getFieldProps('email')} //formik seperate orqali tepadagi value va 2ta funksiyani o'z ichiga oladi
            />
            {/* {formik.touched.email && formik.errors.email ? (
          <div className="text-danger">{formik.errors.email}</div>
        ) : null} */}
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
              // value={formik.values.password}
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              // {...formik.getFieldProps('password')}
            />
            {/* {formik.touched.password && formik.errors.password ? (
          <div className="text-danger active-box">{formik.errors.password}</div>
        ) : null} */}
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
              Login
            </button>
          </Form>
        )
      }}
    </Formik>
  )
}
