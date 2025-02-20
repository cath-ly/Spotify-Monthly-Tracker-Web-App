'use client'

import { ProfileContext } from "@/script"
import { useContext } from "react"

export default function GenreTable() {
  const genreObj:any = []
        
  const populateGenre = () => {
    for (let i=1; i < 6; i++){
      genreObj.push(<li key={`${i}`}>Genre {i}</li>)
    }
  } 

  populateGenre()

  const profileCheck = useContext(ProfileContext);

  return (
    <div>
      <ul className='joe text-center max-w-40'> Top Genres Listened to This Month:
        {genreObj}
      </ul>
    </div>
  )
}
