'use client'

import { createContext, useEffect, useState } from "react";

const getAccessToken = async (clientId: string, code: string): Promise<string> => {
    const verifier = localStorage.getItem("verifier");
    console.log("Verifier ",verifier)

    const params = new URLSearchParams();
    params.append("client_id", clientId);
    params.append("grant_type", "authorization_code");
    params.append("code", code);
    params.append("redirect_uri", "http://localhost:3000");
    params.append("code_verifier", verifier!);

    const result = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params
    });

    const { access_token } = await result.json();
    return access_token;
}

    // TODO: move 26-62 into a separate portion
const redirectToAuthCodeFlow = async (clientId: string) => {
    const verifier = generateCodeVerifier(128);
    const challenge = await generateCodeChallenge(verifier);

    localStorage.setItem("verifier", verifier);
    
    // use axios cause its cleaner
    const params = new URLSearchParams();
    params.append("client_id", clientId);
    params.append("response_type", "code");
    params.append("redirect_uri", "http://localhost:3000");
    // TODO: add all scopes so we don't have to go back and forth
    params.append("scope", "user-read-private user-read-email");
    params.append("code_challenge_method", "S256");
    params.append("code_challenge", challenge);

    document.location = `https://accounts.spotify.com/authorize?${params.toString()}`;
}

const generateCodeVerifier = (length: number) => {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

const generateCodeChallenge = async (codeVerifier: string) => {
    const data = new TextEncoder().encode(codeVerifier);
    const digest = await window.crypto.subtle.digest('SHA-256', data);
    return btoa(String.fromCharCode.apply(null, [...new Uint8Array(digest)]))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
}


async function fetchProfile(token: string): Promise<any> {
    const result = await fetch("https://api.spotify.com/v1/me", {
        method: "GET", headers: { Authorization: `Bearer ${token}` }
    });

    return await result.json();
}

export const ProfileContext = createContext({});

export const SpotifyApiComponent = () => {
    let code: string | null = null;
    if (typeof window !== 'undefined') {
        const params = new URLSearchParams(window.location.search);
        code = params.get("code");
    }

    useEffect(() => {
        const getSpotifyAuth = async (code: string | null) => {
            const verifyProfile = sessionStorage.getItem("Spotify-Profile");
            if (verifyProfile != null) {
                console.log(JSON.parse(verifyProfile));
                return
            }
            if (!code) {
                redirectToAuthCodeFlow("bbd6d5333456415ca8bad1bce919efad");
            } else {
                const accessToken = await getAccessToken("bbd6d5333456415ca8bad1bce919efad", code);
                const profile = await fetchProfile(accessToken);
                sessionStorage.setItem("Spotify-Profile", JSON.stringify(profile));
                console.log(profile);
            }
        }        
        getSpotifyAuth(code)
    }, [])
    return <></>
}