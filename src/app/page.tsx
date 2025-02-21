'use-client'

import Image from "next/image";
import dog from "./favicon.png";
import GenreTable from "./components/GenreTable/GenreTable";
import UserTracks from "./components/UsersTracks/UsersTracks"; 
import ArtistTable from "./components/ArtistTable/ArtistTable";
import { getSpotifyAPI } from "./utils/getSpotifyAPI";
import { SpotifyApiComponent } from "@/script";

require('dotenv').config();

export default function Home() {

  return (
    <div>
      <SpotifyApiComponent/>
      <div className="flex justify-center">
        <img className="max-w-48 max-h-48" src={dog.src} alt="loadFailed" />
      </div>
      <div className="flex justify-around mt-12">
        <GenreTable />
        <UserTracks/>
      </div>
      <ArtistTable />
    </div>
  );
}
