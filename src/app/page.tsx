"use client";

import React, { useState, useEffect } from "react";
import { redirectToAuthCodeFlow } from "./utils/redirectToAuthCodeFlow";
import { getAccessToken } from "./utils/getAccessToken";
import { fetchProfile, fetchTopTracks, fetchTopArtists } from "./utils/fetchSpotifyInfo";
import GenreTable from "./components/GenreTable/GenreTable";
import UserTracks from "./components/UsersTracks/UsersTracks";
import ArtistTable from "./components/ArtistTable/ArtistTable";
import ProfilePic from "./components/ProfilePic/ProfilePic";

export default function Home() {
  const [picture, setPicture] = useState(null);
  const [tracks, setTracks] = useState(null);
  const [artists, setArtists] = useState(null)
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
          const profile = await fetchProfile(accessToken);
          const topTracks = await fetchTopTracks(accessToken);
          const topArtists = await fetchTopArtists(accessToken)
          setPicture(profile.images[0].url);
          setTracks(topTracks.items);
          setArtists(topArtists.items);
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
        <ArtistTable topArtists={artists} />
        <UserTracks topTracks={tracks} />
      </div>
    </div>
  );
}
