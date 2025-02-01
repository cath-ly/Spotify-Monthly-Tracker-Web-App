import Image from "next/image";
import dog from "./favicon.png"
import GenreTable from "./components/GenreTable/GenreTable";
import ArtistTable from "./components/ArtistTable/ArtistTable";

export default function Home() {
  return (
    <div>
      <img src={dog.src} alt="loadFailed" />
      <GenreTable />
      <ArtistTable />
    </div>
  );
}
