import React from 'react';
import { Link } from 'react-router-dom';

const MainLayout: React.FC<{children: React.ReactNode}> = ({ children }) => {
    return (
        <div>
            <header>
                {/* Header content like logo, navigation links, etc. */}
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        {/* Add more navigation links as needed */}
                    </ul>
                </nav>
            </header>
            <main>
                {children} {/* This renders the component passed into the layout */}
            </main>
            <footer>
                {/* Footer content */}
                <p>© 2024 My Website</p>
            </footer>
        </div>
    );
};

export default MainLayout;
