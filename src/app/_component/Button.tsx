"use client";

import { useCallback, useState } from "react";

export default function AddButton() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = useCallback(
        async function onClick() {
            console.log(name, email, password);
        },
        [name, email, password]
    );

    return (
        <>
            <input
                type="text"
                name="name"
                id="name"
                value={name}
                className="border border-amber-300"
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="email"
                name="email"
                id="email"
                value={email}
                className="border border-amber-300"
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                name="password"
                id="password"
                value={password}
                className="border border-amber-300"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button
                onClick={() => handleSubmit()}
                className="bg-blue-500 text-white p-2 rounded-md"
            >
                Click me
            </button>
        </>
    );
}
