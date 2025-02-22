import axios from 'axios';
import { getSpotifyAPIToken } from "./getSpotifyAPIToken";


export const getSpotifyAPI = async () => {
    const responseToken: string = await getSpotifyAPIToken();
    console.log(responseToken)


    // const getProfile = async (accessToken: string) => {
    //     try {       
    //         const getData = await axios.get(
    //             'https://api.spotify.com/v1/me',
    //             {
    //                 headers: { Authorization: `Bearer `+ responseToken}
    //         })
    //         console.log(getData);
    //         return getData
    //     }
    //     catch (err){
    //         console.log("Failed to GET User's Top Item", err)
    //     }
    // }

    // getProfile(responseToken);


    const scope = 'user-read-private user-read-email';
    const authUrl = new URL("https://accounts.spotify.com/authorize")

    // generated in the previous step
    window.localStorage.setItem('code_verifier', codeVerifier);

    const params =  {
        response_type: 'code',
        client_id: process.env.USER_ID,
        scope,
        code_challenge_method: 'S256',
        code_challenge: codeChallenge,
        redirect_uri: redirectUri,
    }

    authUrl.search = new URLSearchParams(params).toString();
    window.location.href = authUrl.toString();

}