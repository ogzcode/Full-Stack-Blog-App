import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setUserToken } from './redux/slice/postSlice'
import { getToken} from './services/storage'

import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Login from './auth/Login'
import Create from './pages/Create'
import Error from './pages/Error'

import MainRoutes from './routes/MainRoutes'
import SinglePost from './pages/SinglePost'

function App() {
  const { token } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  const storageToken = getToken();
  if (storageToken && !token) {
    dispatch(setUserToken(storageToken));
  }

  return (
    <Routes>
      <Route exact path='/' element={<Navigate to={"home"} />} /> 
      <Route path='/' element={<MainRoutes />}>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        {
          storageToken && <Route path="create" element={<Create />} />
        }
        <Route path='/post/:id' element={<SinglePost/>}/>
        <Route path="*/" element={<Error/>} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default App
