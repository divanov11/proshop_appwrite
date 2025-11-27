import { Link } from "@tanstack/react-router";

import { useState } from "react";

export default function Header() {
    return (
        <>
            <header>
                <Link to="/">
                    <h1>ProShop</h1>
                </Link>
                <Link to="/profile">
                    <h1>Profile</h1>
                </Link>
            </header>
        </>
    );
}
