import React from 'react';
import { Menubar } from 'primereact/menubar';
import { MenuItem } from "primereact/menuitem";

const TopBar = () => {

    const items: MenuItem[] = [
        {
            label: 'Home',
            icon: 'pi pi-home'
        },
        {
            label: 'Features',
            icon: 'pi pi-star'
        },
        {
            label: 'Contact',
            icon: 'pi pi-envelope'
        }
    ];

    const start = <img alt="logo" src="./logo192.png" height="40" className="mr-2"></img>;

    const end = (
        <div className="flex align-items-center gap-2">
            {/*<MultiStateCheckbox*/}
            {/*    value={isDarkTheme}*/}
            {/*    onChange={(e) => handleChangeTheme(e.value)}*/}
            {/*    options={[*/}
            {/*        { icon: 'pi pi-sun', isDarkTheme: false },*/}
            {/*        { icon: 'pi pi-moon', isDarkTheme: true }*/}
            {/*    ]}*/}
            {/*    optionValue="isDarkTheme"*/}
            {/*    empty={false}*/}
            {/*/>*/}
        </div>
    );

    return (
        <div className="card">
            <Menubar model={items} start={start} end={end} />
            {/*<Toast ref={toast} position="bottom-right" />*/}
        </div>
    )
}

export { TopBar };
