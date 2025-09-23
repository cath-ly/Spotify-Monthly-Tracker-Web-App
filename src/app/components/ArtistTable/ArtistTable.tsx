"use client";

import { ReactElement } from "react";
export default function ArtistTable(topArtists: any): ReactElement {

const artistPic: ReactElement[] = [];
const topArtistObj = topArtists;

const populateObj = () => {
  if (topArtistObj.topArtists == null) {
    for (let i = 1; i < 6; i++) {
      artistPic.push(
      <li id={"Placeholder: " + i}>
      Picture {i} Tracks {i}
      </li>
      );
    }
  } 
  
  else {
    for (const topArtist of topArtistObj.topArtists) {
      artistPic.push(
        <li className="flex flex-row gap-8 mb-8" id={topArtist.uri}>
          <img className="w-48 h-48"
            src={topArtist.images[1].url}
            alt={topArtist.name}
          />
          <div className="flex flex-col justify-center w-100">
          <p className="font-sans text-2xl">{topArtist.name}</p>
          </div>
        </li>
        );
      }
    }
  };

populateObj();

return (
  <div className="flex gap-8">
  <ul className="flex-col">{artistPic}</ul>
  </div>
  );
}