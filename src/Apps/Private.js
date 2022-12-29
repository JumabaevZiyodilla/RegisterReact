import React, { useContext, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthoContext'
import { MeContext } from '../context/MeContext'
import { Login } from '../pages/Login/Login'
import './apps.css'

export const Private = () => {
  const { token, setToken } = useContext(AuthContext)
  const { me, setMe } = useContext(MeContext)
  const [username, setUsername] = useState([me.firstname[0], me.lastname[0]])
  return (
    <>
      <header className="site-header">
        <div className="container">
          <div className="d-flex justify-content-between">
            <h2>Private</h2>
            <nav>
              <ul className="public-list list-unstyled">
                <li>
                  <Link className="public-list__link" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="public-list__link" to="/posts">
                    Posts
                  </Link>
                </li>
                <li className='public-list__item'>
                  <p className="public-list__username">{username}</p>
                  <ul className="username-list">
                    <li className='username-item'>
                      <button
                      className='public-list_logout'
                        onClick={() => {
                          setToken('')
                          setMe('')
                        }}
                      >
                        Log out
                      </button>
                    </li>
                    <li className='username-item'>
                      <Link className="public-list__link" to="/settings">
                        Settings
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <h2>Private Home Page</h2>
                </>
              }
            ></Route>
            <Route
              path="/posts"
              element={
                <>
                  <h2>Private Posts Page</h2>
                </>
              }
            ></Route>
            <Route
              path="/settings"
              element={
                <>
                  <h2>Settings</h2>
                </>
              }
            ></Route>
            <Route
              path="*"
              element={
                <>
                  <h2>404 Not found</h2>
                </>
              }
            ></Route>
          </Routes>
        </div>
      </header>
    </>
  )
}
