export default function GenreTable() {
  const genreObj:any = []
        
  const populateGenre = () => {
    for (let i=1; i < 6; i++){
      genreObj.push(<li>Genre {i}</li>)
    }
  } 

  populateGenre()

  return (
    <div>
      <ul className='joe text-center max-w-40'> Top Genres Listened to This Month:
        {genreObj}
      </ul>
    </div>
  )
}
