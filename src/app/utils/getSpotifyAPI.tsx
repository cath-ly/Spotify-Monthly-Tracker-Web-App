import axios from 'axios';
import { getSpotifyAPIToken } from "./getSpotifyAPIToken";


export const getSpotifyAPI = async () => {
    const responseToken: string = await getSpotifyAPIToken();
    console.log(responseToken)

    const headers: any = {
        Accept: 'application/json',
        Authorization: `Bearer ${responseToken}`,
        'Content-Type': 'application/json',
    }

    const spotifyURL = "https://api.spotify.com/v1/me/top/artists?time_range=short_term"
    
    try {
        const getData = await axios.get(
            spotifyURL,
            headers)
        return getData
    }
    catch (err){
        console.log("Failed to GET User's Top Item", err)
    }
}