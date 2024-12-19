import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Star from '../../assets/star.svg';
import '../../style/navbar/navbar.css';

const Navbar = ({ setIsAuthenticated }) => {
    const navigate = useNavigate();
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

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

    const handleGameCenter = () => {
        navigate('/play/');
    };

    return (
        <>
        <header>
            <nav className={`navbar ${isNavOpen ? 'open' : ''}`}>
                <section className="logo-container">
                    <h2 className="logo">Virtual Pet</h2>
                </section>
                    <button
                        className={`nav-toggle ${isNavOpen ? 'active' : ''}`}
                        onClick={toggleNav}
                    >
                        <img src={Star} alt="Star responsive menu" />
                    </button>

                    <section className={`nav-btn ${isNavOpen ? 'show' : ''}`}>
                        <button className="btn game-center" onClick={handleGameCenter}>
                            Pet Center
                        </button>
                        <button className="btn play" onClick={handlePlayGame}>
                            Play Game
                        </button>
                        <button className="btn logout" onClick={handleLogout}>
                            Log out
                        </button>
                    </section>
            </nav>
        </header>
        </>
    );
};

export default Navbar;
