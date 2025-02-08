import axios from 'axios';

export const getSpotifyAPIToken = async () => {
    const headersAndAuth =  {
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/x-www-form-url'
        },
        auth: {
            username: process.env.USER_ID as string,
            password: process.env.USER_PW as string
        }
    }

    const spotifyAPITokenURL = 'https://accounts.spotify.com/api/token';
    const dataPostType = new URLSearchParams({
        grant_type: 'client_credentials'
    }).toString();
    try {
        const resp = await axios.post(
            spotifyAPITokenURL,
            dataPostType,
            headersAndAuth
        )
        return resp
    } catch (err) {
        console.log(`Failed to get spotify token ${err}`)
    }
};