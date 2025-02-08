import 'server-only';
import axios from 'axios';

export const getSpotifyAPIToken = async () => {
    const headers =  { 
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }

    const spotifyAPITokenURL = 'https://accounts.spotify.com/api/token';
    const dataPostType = new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: process.env.USER_ID as string,
        client_secret: process.env.USER_PW as string
    }).toString();
    console.log(dataPostType);
    try {
        const resp = await axios.post(
            spotifyAPITokenURL,
            dataPostType,
            headers
        )
        return resp
    } catch (err) {
        console.log(`Failed to get spotify token ${err}`)
    }
};