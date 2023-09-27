import { Link, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <nav>
      <ul className="layout">
        <li><Link to="Home">Home</Link></li>
        <li><Link to="Calculator">Calculator</Link></li>
        <li><Link to="Quote">Quote</Link></li>
      </ul>
      <Outlet />
    </nav>
  );
}

export default Layout;
