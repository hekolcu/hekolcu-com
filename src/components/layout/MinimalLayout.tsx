import React from 'react';

const MinimalLayout: React.FC<{children: React.ReactNode}> = ({ children }) => {
    return (
        <div>
            <header>
                {/* Minimal header content, like a simple logo */}
            </header>
            <main>
                {children} {/* This renders the component passed into the layout */}
            </main>
            <footer>
                {/* Minimal footer content */}
            </footer>
        </div>
    );
};

export default MinimalLayout;
