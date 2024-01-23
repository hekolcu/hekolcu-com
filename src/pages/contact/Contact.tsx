import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

const Contact = () => {
    const email = "hekolcu@gmail.com";
    const toast = React.useRef<Toast>(null);

    const copyEmailToClipboard = () => {
        navigator.clipboard.writeText(email)
            .then(() => toast.current?.show({
                    severity: 'success',
                    summary: 'Copied to Clipboard',
                    detail: 'Email address copied!',
                    life: 3000
                })
            );
    };

    const header = (
        <></>
    );

    return (
        <div className="flex align-items-center" style={{height: '50vh'}}>
            <Toast ref={toast} position="bottom-right" />
            <div className="flex flex-row justify-content-center flex-grow-1">
                <Card title="Contact Details" className="text-center" style={{ width: '20em' }}  header={header}>
                    <p className="m-0">Name: Hüseyin Emre Kolcu</p>
                    <p>Location: Ankara, Türkiye</p>
                    <Button
                        label="Copy Email to Clipboard"
                        icon="pi pi-clipboard"
                        onClick={copyEmailToClipboard}
                        className="p-button-text"
                    />
                </Card>
            </div>
        </div>
    );
}

export {Contact};
