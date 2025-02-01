import Image from "next/image";
import dog from "./favicon.png"
import GenreTable from "./components/GenreTable/GenreTable";

export default function Home() {
  return (
    <div>
      <img src={dog.src} alt="loadFailed" />
      <GenreTable />
    </div>
  );
}
