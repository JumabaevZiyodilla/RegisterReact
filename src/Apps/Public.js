import React from 'react'
import { Routes, Route, NavLink, Navigate } from 'react-router-dom'
import { Login } from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import './apps.css'

export const Public = () => {
  return (
    <>
      <header className="site-header">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            <h2>Public</h2>
            <nav>
              <ul className="public-list list-unstyled">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? 'public-list__link active'
                        : 'public-list__link'
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className="public-list__link" to="/docs">
                    Docs
                  </NavLink>
                </li>
                <li>
                  <NavLink className="public-list__link" to="/about">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink className="public-list__link" to="/login">
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink className="public-list__link" to="/register">
                    Register
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <h2>Public Home Page</h2>
                  <Lorem />
                </>
              }
            ></Route>
            <Route
              path="/docs"
              element={
                <>
                  <h2>Public Docs Page</h2>
                  <Lorem />
                </>
              }
            ></Route>
            <Route
              path="/about"
              element={
                <>
                  <h2>Public About Page</h2>
                  <Lorem />
                </>
              }
            ></Route>
            <Route
              path="/login"
              element={
                <>
                  <Login />
                </>
              }
            ></Route>
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Navigate to="/login" replace={true} />} />
          </Routes>
        </div>
      </header>
    </>
  )
}

export const Lorem = () => {
  return (
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, enim?
      Nostrum repudiandae saepe veniam fuga velit repellendus dolorem minima
      maxime nemo voluptas! Dolor nesciunt debitis quod similique quas amet
      tempora eveniet obcaecati qui incidunt impedit quibusdam eos illo, ad
      aliquam, totam hic consectetur itaque voluptatem commodi rerum? Quo
      consequuntur repudiandae perferendis cum nobis? Distinctio et expedita
      praesentium ad, culpa quas.
    </p>
  )
}
