export default function UserTracks() {
    const TrackObj:any = []
          
    const populateTracks = () => {
      for (let i=1; i < 6; i++){
        TrackObj.push(<li>Tracks {i}</li>)
      }
    } 
  
    populateTracks()
  
    return (
      <div className="flex"> 
        <div>
        <ul className='joe'> 
          <div>Profile Pic </div>
          {TrackObj}
        </ul>
        </div>
        <div>
        <ul className='joe'>
          <div>{" "}Song Title</div>
          {TrackObj}
        </ul>
        </div>
      </div>
    )
  }
  