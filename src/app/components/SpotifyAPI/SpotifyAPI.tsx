"use client";

import { useEffect } from "react";
import { getAccessToken } from "@/app/utils/getAccessToken";
import { fetchProfile } from "@/app/utils/fetchSpotifyInfo";
import { redirectToAuthCodeFlow } from "@/app/utils/redirectToAuthCodeFlow";

export const SpotifyAPI = () => {
  let code: string | null = null;
  if (typeof window !== "undefined") {
    const params = new URLSearchParams(window.location.search);
    code = params.get("code");
  }

  useEffect(() => {
    const getSpotifyAuth = async (code: string | null) => {
      const verifyProfile = sessionStorage.getItem("Spotify-Profile");
      if (verifyProfile != null) {
        console.log(JSON.parse(verifyProfile));
        return;
      }
      if (!code) {
        redirectToAuthCodeFlow(process.env.NEXT_PUBLIC_USER_ID);
      } else {
        const accessToken = await getAccessToken(
          process.env.NEXT_PUBLIC_USER_ID,
          code
        );
        const profile = await fetchProfile(accessToken);
        sessionStorage.setItem("Spotify-Profile", JSON.stringify(profile));
        console.log(profile);
      }
    };
    getSpotifyAuth(code);
  }, []);
  return <></>;
};
