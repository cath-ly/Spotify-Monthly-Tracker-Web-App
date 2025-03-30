"use client";

import React, { useState, useEffect } from "react";
import { redirectToAuthCodeFlow } from "./utils/redirectToAuthCodeFlow";
import { getAccessToken } from "./utils/getAccessToken";
import { fetchProfile } from "./utils/fetchSpotifyInfo";
import GenreTable from "./components/GenreTable/GenreTable";
import UserTracks from "./components/UsersTracks/UsersTracks";
import ArtistTable from "./components/ArtistTable/ArtistTable";
import ProfilePic from "./components/ProfilePic/ProfilePic";

export default function Home() {
  const [picture, setPicture] = useState(null);
  let code: string | null = null;
  if (typeof window !== "undefined") {
    const params = new URLSearchParams(window.location.search);
    code = params.get("code");
  }

  useEffect(() => {
    const getSpotifyAuth = async (code: string | null) => {
      if (!code) {
        redirectToAuthCodeFlow(process.env.NEXT_PUBLIC_USER_ID);
      } else {
        try {
          const accessToken = await getAccessToken(
            process.env.NEXT_PUBLIC_USER_ID,
            code
          );
          const data = await fetchProfile(accessToken);
          console.log(data);
          setPicture(data.images[0].url);
        } catch (error) {
          console.error("Error fetching data:", error);
          redirectToAuthCodeFlow(process.env.NEXT_PUBLIC_USER_ID);
        }
      }
    };
    getSpotifyAuth(code);
  }, []);
  return (
    <div>
      <ProfilePic pictureInfo={picture} />
      <div className="flex justify-around mt-12">
        <GenreTable />
        <UserTracks />
      </div>
      <ArtistTable />
    </div>
  );
}
