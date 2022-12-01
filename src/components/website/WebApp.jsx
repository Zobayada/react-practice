import React from 'react';
import AppPages from "./AppPages";
import { Auth0Provider } from "@auth0/auth0-react";

const WebApp = () => {
    return (
        <>
            <Auth0Provider
                domain="dev-1oo7knjbtb1buk7u.us.auth0.com"
                clientId="hHFUoKY27JXNXFQxLNduQChrr8Bp12XN"
                redirectUri={window.location.origin}
            >
                <AppPages />
            </Auth0Provider>
        </>
    )
}

export default WebApp