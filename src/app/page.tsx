'use client'

import Image from "next/image";
import dog from "./favicon.png";
import loading from "./loading.gif"
import React, { useState, useEffect } from "react";
import GenreTable from "./components/GenreTable/GenreTable";
import UserTracks from "./components/UsersTracks/UsersTracks"; 
import ArtistTable from "./components/ArtistTable/ArtistTable";
import ProfilePic from "./components/ProfilePic/ProfilePic";
import { getSpotifyAPI } from "./utils/getSpotifyAPI";
import { SpotifyApiComponent } from "@/script";

require('dotenv').config();

export default function Home() {
  const [showPfp, setShowPfp] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPfp(true);
    }, 300);
    return () => clearTimeout(timer);
  }, [])

  return (
    <div>
      <SpotifyApiComponent/>
      <div className = "flex justify-center">
       {showPfp ? <ProfilePic /> : <img src={loading.src} alt="loadFailed" className="rounded-full w-80 h-80"/>}
      </div>
      <div className="flex justify-around mt-12">
        <GenreTable />
        <UserTracks/>
      </div>
      <ArtistTable />
    </div>
  );
}
