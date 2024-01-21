import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import routes from "./routes";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        index={route.exact}
                        element={
                            <route.layout>
                                <route.component />
                            </route.layout>
                        }
                        errorElement={
                            <p>Whoops</p>
                        }
                    />
                ))}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
