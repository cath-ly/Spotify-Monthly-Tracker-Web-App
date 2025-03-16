'use client'

export default function UserTracks() {
    const topTracks = sessionStorage.getItem("Spotify-Tracks");
    const TrackObj:any = []
    const TrackPic:any = []

    const populateObj = () => {
      if (topTracks === null){
        for (let i=1; i < 6; i++){
          TrackPic.push(<li>Picture {i}</li>)
          TrackPic.push(<li>Tracks {i}</li>)
        }
      } else {
        const topTrackObj = JSON.parse(topTracks);
        for (const topTrackAlbum of topTrackObj.items){
          TrackPic.push(<li id={topTrackAlbum.uri}><img src={topTrackAlbum.album.images[2].url} alt={topTrackAlbum.album.name} /> {topTrackAlbum.name}</li>)
        }
      }
    } 

    populateObj()
    return (
      <div className="flex gap-8"> 
        <ul className='flex-col center'>
          {TrackPic}
        </ul>
      </div>
    )
  }
  