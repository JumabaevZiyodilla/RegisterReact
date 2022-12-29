import Register from './pages/Register/Register'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Login } from './pages/Login/Login'
import { useContext } from 'react'
import { AuthContext } from './context/AuthoContext'
import { Private } from './Apps/Private'
import { Public } from './Apps/Public'

function App() {
  const { token, setToken } = useContext(AuthContext)

  if (token) {
    return <Private />
  } else {
    return <Public />
  }
}

export default App
