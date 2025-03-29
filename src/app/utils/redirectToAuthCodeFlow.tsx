import {
  generateCodeChallenge,
  generateCodeVerifier,
} from "./generateCodeString";

// TODO: move 26-62 into a separate portion
export const redirectToAuthCodeFlow = async (clientId: string) => {
  const verifier = generateCodeVerifier(128);
  const challenge = await generateCodeChallenge(verifier);

  localStorage.setItem("verifier", verifier);

  // use axios cause its cleaner
  const params = new URLSearchParams();
  params.append("client_id", clientId);
  params.append("response_type", "code");
  params.append("redirect_uri", "http://localhost:3000");
  // TODO: add all scopes so we don't have to go back and forth
  params.append("scope", "user-read-private user-read-email");
  params.append("code_challenge_method", "S256");
  params.append("code_challenge", challenge);

  document.location = `https://accounts.spotify.com/authorize?${params.toString()}`;
};
