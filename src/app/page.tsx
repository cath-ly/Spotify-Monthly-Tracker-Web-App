"use-client";

import GenreTable from "./components/GenreTable/GenreTable";
import UserTracks from "./components/UsersTracks/UsersTracks";
import ArtistTable from "./components/ArtistTable/ArtistTable";
import ProfilePic from "./components/ProfilePic/ProfilePic";
import { SpotifyAPI } from "./components/SpotifyAPI/SpotifyAPI";

require("dotenv").config();

export default function Home() {
  return (
    <div>
      <SpotifyAPI />
      <ProfilePic />
      <div className="flex justify-around mt-12">
        <GenreTable />
        <UserTracks />
      </div>
      <ArtistTable />
    </div>
  );
}
