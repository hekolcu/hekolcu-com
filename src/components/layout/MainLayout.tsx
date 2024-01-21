import React from 'react';
import { TopBar, BottomBar } from "../common";

const MainLayout: React.FC<{children: React.ReactNode}> = ({ children }) => {
    return (
        <div className="flex flex-column" style={{minHeight: '100vh'}}>
            <header>
                <TopBar/>
            </header>
            <main className="flex-grow-1">
                {children}
            </main>
            <footer>
                <BottomBar/>
            </footer>
        </div>
    );
};

export default MainLayout;
