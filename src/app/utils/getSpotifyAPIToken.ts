import axios from 'axios';

export const getSpotifyAPIToken = async () => {
    // const headers =  { 
    //     headers: {
    //         Accept: 'application/json',
    //         'Content-Type': 'application/x-www-form-url'
    //     }
    // }

    // const spotifyAPITokenURL = 'https://accounts.spotify.com/api/token';
    // const dataPostType = new URLSearchParams({
    //     grant_type: 'client_credentials',
    //     client_id: process.env.USER_ID as string,
    //     client_secret: process.env.USER_PW as string
    // }).toString();
    // try {
    //     const resp = await axios.post(
    //         spotifyAPITokenURL,
    //         dataPostType,
    //         headers
    //     )
    //     return resp
    // } catch (err) {
    //     console.log(`Failed to get spotify token ${err}`)
    // }



  const clientId = process.env.USER_ID;
  const clientSecret = process.env.USER_PW;
  
  const headers = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    auth: {
      username: clientId as string,
      password: clientSecret as string,
    },
  };
  const data = {
    grant_type: 'client_credentials',
  };
    const dataPostType = new URLSearchParams({
        grant_type: 'client_credentials',
    }).toString();
  try {
    const response = await axios.post(
      'https://accounts.spotify.com/api/token',
      data,
      headers
    );
    console.log(response.data.access_token);
    return response.data.access_token;
  } catch (error) {
    console.log(error);
  }
};