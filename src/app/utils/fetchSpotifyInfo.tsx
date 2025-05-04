import { profileURL, topTracksURL, topArtistsURL } from "./fetchURL";

export async function fetchProfile(token: string): Promise<any> {
  const result = await fetch(profileURL, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });

  return await result.json();
}

export async function fetchTopTracks(token: string): Promise<any> {
  const topTracksResult = await fetch(topTracksURL, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });

  return topTracksResult.json();
}

export async function fetchTopArtists(token: string): Promise<any> {
  const topArtistsResult = await fetch(topArtistsURL, {
  method: "GET",
  headers: { Authorization: `Bearer ${token}` },
  });
  
  return topArtistsResult.json();
}