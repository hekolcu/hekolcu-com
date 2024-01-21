import React from 'react';
import { Toolbar } from "primereact/toolbar";

const BottomBar = () => {
    const start = <p>© 2024 hekolcu.com</p>;

    return (
        <Toolbar start={start} />
    )
}

export { BottomBar };
