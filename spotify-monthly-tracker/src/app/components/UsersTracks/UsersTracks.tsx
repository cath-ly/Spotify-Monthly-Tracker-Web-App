export default function UserTracks() {
    const TrackObj:any = []
    const TrackPic:any = []

    const populatePicture = () => {
      for (let i=1; i < 6; i++){
        TrackPic.push(<li>Picture {i}</li>)
      }
    } 
    
    const populateTracks = () => {
      for (let i=1; i < 6; i++){
        TrackObj.push(<li>Tracks {i}</li>)
      }
    }

    populatePicture()
    populateTracks()
    return (
      <div className="flex"> 
        <ul className='joe'> 
          <div>Profile Pic </div>
          {TrackPic}
        </ul>
        <ul className='joe'>
          <div>Song Title</div>
          {TrackObj}
        </ul>
      </div>
    )
  }
  