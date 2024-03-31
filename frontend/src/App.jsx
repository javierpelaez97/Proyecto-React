
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Login from './pages/login/login'
import Singup from './pages/singup/Singup'
import Books from './pages/books/Books'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  

  return (
    <>
    <header className='p-3 mb-2 bg-primary text-white'>
      <nav >
        <ul className='container text-center row list-unstyled'>
          <li className='col'><Link className='text-white link-offset-2 link-underline link-underline-opacity-0' to='/'>Home</Link></li>
          <li className='col'><Link className='text-white link-offset-2 link-underline link-underline-opacity-0' to='/login'>Iniciar Sesión</Link></li>
          <li className='col'><Link className='text-white link-offset-2 link-underline link-underline-opacity-0' to='/singup'>Registrarse</Link></li>
          <li className='col'><Link className='text-white link-offset-2 link-underline link-underline-opacity-0' to= '/books'>Libros</Link></li>
        </ul>
      </nav>
    </header>
    <main>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element= {<Login></Login>}></Route>
        <Route path='/singup' element={<Singup></Singup>}></Route>
        <Route path='/books' element={<Books></Books>}></Route>
      </Routes>
    </main>
    <footer>
      Proyecto javier Pelaez 2024
    </footer>
    </>
  )
}

export default App
