import Image from "next/image";
import dog from "./favicon.png"
import GenreTable from "./components/GenreTable/GenreTable";
import UserTracks from "./components/UsersTracks/UsersTracks"; 
export default function Home() {
  return (
    <div>
      <img src={dog.src} alt="loadFailed" />
      <GenreTable />
      <UserTracks/>
    </div>
    
  );
}
