import kekw from "./kekw.jpg";

export default function ArtistTable() { 
    const artistObj:any = []

    const populateArtist = () => {
        for (let i=1; i<6; i++){
            artistObj.push(<li className="text-center"><img src={kekw.src} alt={"Artist "+i}/><p className="mt-6">Artist Name: {i}</p></li>)
        }
    }
    populateArtist()

    return (
        <ul className="flex justify-around mt-12">
          {artistObj}
        </ul>
      )
}
