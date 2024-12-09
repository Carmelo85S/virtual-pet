import { useNavigate } from 'react-router-dom';
import '../../style/navbar/navbar.css';

const Navbar = ({ setIsAuthenticated }) => {

    const navigate = useNavigate();

    const handleLogout = () => {
        setIsAuthenticated(false);
        navigate('/login');
    };

  return (
    <header>
        <nav>
            <section className="logo-container">
                <h2 className="logo">Virtual Pet</h2>
            </section>
            <section className="nav-btn">
                <button className="btn play">Play Game</button>
                <button className="btn logout" onClick={handleLogout}>Log out</button>
            </section>
        </nav>
    </header>
  )
}

export default Navbar
