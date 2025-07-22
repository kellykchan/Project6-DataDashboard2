import { Link } from 'react-router-dom';

const Sidebar = () => (
  <div className="sidebar">
    <h3>Menu</h3>
    <Link to="/" className="sidebar-link">Dashboard</Link>
    <Link to="/about" className="sidebar-link">About</Link>
  </div>
);

export default Sidebar;
