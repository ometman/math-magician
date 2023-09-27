import { Link, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <header>
        <h1 className="title">Math Magicians</h1>
        <nav className="navbar">
          <ul className="nav-menu">
            <li><Link to="Home">Home</Link></li>
            <li>|</li>
            <li><Link to="Calculator">Calculator</Link></li>
            <li>|</li>
            <li><Link to="Quote">Quote</Link></li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default Layout;
