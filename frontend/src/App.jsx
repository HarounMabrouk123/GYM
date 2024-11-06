import { Outlet, Link } from 'react-router-dom';
import Nav from './components/Nav';
import Foot from './components/Foot'

function App() {
  return (
    <div>
      <Nav></Nav>
      <Outlet />
      <Foot></Foot>
    </div>
  );
}

export default App;