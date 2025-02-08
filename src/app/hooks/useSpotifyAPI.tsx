import { getSpotifyAPIToken } from "../utils/getSpotifyAPIToken"

export const useSpotifyAPIToken = () => {
    const response = getSpotifyAPIToken();
    console.log(response)
}