import { Outlet, Link } from 'react-router-dom';
import Nav from './components/Nav';
import Foot from './components/Foot'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUserCircle } from 'react-icons/fa';

function App() {
  return (
    <div>
      <Nav></Nav>
      <Outlet />
      <Foot></Foot>
      <ToastContainer />
    </div>
  );
}

export default App;