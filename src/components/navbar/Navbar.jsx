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

    const handlePlay = () => {
        navigate('/play/game');
    };

    const handleGameCenter = () => {
        navigate('/play/');
    };

    const handleMeetTheTeam = () => {
        navigate('/meet-the-team')
    }

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
                        <button className="btn meet" onClick={handleMeetTheTeam}>
                            The team
                        </button>
                        <button className="btn game-center" onClick={handleGameCenter}>
                            Pet Center
                        </button>
                        <button className="btn play" onClick={handlePlay}>
                            Play
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
