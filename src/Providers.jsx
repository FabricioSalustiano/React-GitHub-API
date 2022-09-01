import React from "react";
import App from "./App";
import { ResetCSS } from "./global/ResetCSS";
import GitHubProvider from "./providers/GitHubProvider";

function Providers() {
    return (
        <>
            <GitHubProvider>
                <ResetCSS />
                <App />
            </GitHubProvider>
        </>
    )
}

export default Providers;