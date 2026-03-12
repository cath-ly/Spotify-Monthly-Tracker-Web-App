import axios from "axios";
import { profileURL, topTracksURL, topArtistsURL } from "./fetchURL";

export async function fetchProfileInfo(token: string): Promise<any> {
  const promises = [axios.get(profileURL, {headers: { Authorization: `Bearer ${token}` }}), 
                    axios.get(topTracksURL, {headers: { Authorization: `Bearer ${token}` }}), 
                    axios.get(topArtistsURL, {headers: { Authorization: `Bearer ${token}` }})];
  const profilePromise = await Promise.allSettled(promises);
  const profileInfo: any[] | Promise<any> = [];
  profilePromise.forEach((result, index) => {
    if (result.status === "fulfilled"){
     profileInfo.push(result.value.data) 
    }
  })

  return profileInfo;
}