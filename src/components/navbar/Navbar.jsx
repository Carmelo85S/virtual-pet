import { useNavigate } from 'react-router-dom';
import '../../style/navbar/navbar.css';

const Navbar = ({ setIsAuthenticated }) => {

    const navigate = useNavigate();

    const handleLogout = () => {
        const confirmLogout = window.confirm("Are you sure you want to log out?");
        if (confirmLogout) {
            setIsAuthenticated(false);
            navigate('/login');
        }
    };

    const handlePlayGame = () => {
        navigate('/play/game');
    };

  return (
    <header>
        <nav>
            <section className="logo-container">
                <h2 className="logo">Virtual Pet</h2>
            </section>
            <section className="nav-btn">
                <button className="btn play" onClick={handlePlayGame}>Play Game</button>
                <button className="btn logout" onClick={handleLogout}>Log out</button>
            </section>
        </nav>
    </header>
  )
}

export default Navbar
