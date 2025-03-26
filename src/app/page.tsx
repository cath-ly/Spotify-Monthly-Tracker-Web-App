"use client";

import React, { useState, useEffect } from "react";
import GenreTable from "./components/GenreTable/GenreTable";
import UserTracks from "./components/UsersTracks/UsersTracks";
import ArtistTable from "./components/ArtistTable/ArtistTable";
import ProfilePic from "./components/ProfilePic/ProfilePic";
import { getSpotifyAPI } from "./utils/getSpotifyAPI";
import {
  SpotifyApiComponent,
  fetchProfile,
  getAccessToken,
  redirectToAuthCodeFlow,
} from "@/script";

export default function Home() {
  const [profile, setProfile] = useState(null);
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
          const picture = data.images[0].url;
          setProfile(picture);
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
      <div className="flex justify-center">
        <ProfilePic pictureInfo={profile} />
      </div>
      <div className="flex justify-around mt-12">
        <GenreTable />
        <UserTracks />
      </div>
      <ArtistTable />
    </div>
  );
}
