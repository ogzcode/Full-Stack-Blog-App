import { Routes, Route, Navigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setUserToken } from './redux/slice/postSlice'
import { getToken } from './services/storage'

import './App.css'
import About from './pages/About'
import Login from './auth/Login'
import Create from './pages/Create'
import Error from './pages/Error'
import HomeContent from './components/HomeContent'

import MainRoutes from './routes/MainRoutes'
import SinglePost from './pages/SinglePost'
import Contact from './pages/Contact'
import { Messages } from './pages/Messages'

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
        <Route path="/home" element={<HomeContent />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {
          storageToken && (
            <>
              <Route path="create" element={<Create />} />
              <Route path="messages" element={<Messages />} />
            </>
          )
        }
        <Route path='/post/:id' element={<SinglePost />} />
        <Route path="*/" element={<Error />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default App
