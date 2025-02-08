import Image from "next/image";
import dog from "./favicon.png"
import GenreTable from "./components/GenreTable/GenreTable";
import UserTracks from "./components/UsersTracks/UsersTracks"; 
import ArtistTable from "./components/ArtistTable/ArtistTable";
import ProfilePic from "./components/ProfilePic/ProfilePic";

//make img to react component

export default function Home() {
  return (
    <div>
        <ProfilePic />
      <div className="flex justify-around mt-12">
        <GenreTable />
        <UserTracks/>
      </div>
      <ArtistTable />
    </div>
  );
}
