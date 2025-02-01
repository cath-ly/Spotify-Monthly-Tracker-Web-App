import kekw from "./kekw.jpg";

export default function ArtistTable() { 
    const artistObj:any = []

    const populateArtist = () => {
        for (let i=1; i<6; i++){
            artistObj.push(<li><img src={kekw.src} alt={"Artist "+i}/>Artist Name: {i}</li>)
        }
    }
    populateArtist()

    return (
        <div>
          <ul className='joe'>
            {artistObj}
          </ul>
        </div>
      )
}
