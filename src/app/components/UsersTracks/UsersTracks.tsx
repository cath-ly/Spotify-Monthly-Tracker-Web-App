'use client'

import { ReactElement } from "react";

export default function UserTracks(): ReactElement {
    const topTracks: string | null = sessionStorage.getItem("Spotify-Tracks");
    const trackPic: ReactElement[] = []

    const populateObj = () => {
      if (topTracks == null){
        for (let i=1; i < 6; i++){
          trackPic.push(<li id={"Placeholder: " + i}>Picture {i} Tracks {i}</li>)
        }
      } else {
        const topTrackObj = JSON.parse(topTracks);
        for (const topTrackAlbum of topTrackObj.items){
          trackPic.push(<li className="flex flex-row gap-8 mb-8" id={topTrackAlbum.uri}>
            <img className="w-48 h-48" src={topTrackAlbum.album.images[1].url} alt={topTrackAlbum.album.name} />
            <div className="flex flex-col justify-center w-100"> 
              <p className="font-sans text-2xl">{topTrackAlbum.name}</p>
              <p className="font-sans text-2xl">{topTrackAlbum.album.name}</p>
              <p className="font-sans text-2xl">{topTrackAlbum.artists[0].name}</p>
              </div>
          </li>)
        }
      }
    } 

    populateObj()
    return (
      <div className="flex gap-8"> 
        <ul className='flex-col'>
          {trackPic}
        </ul>
      </div>
    )
  }
  