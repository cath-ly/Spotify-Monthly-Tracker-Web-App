"use client"
import dog from "../../favicon.png"
import loading from "../../loading.gif"
export default function ProfilePic() {
    const profileObj:any = []
    const profile:any = sessionStorage.getItem("Spotify-Profile");

    const populateProfilePic = () => {
        const picture = JSON.parse(profile).images[0].url as string;
        if (profile == null) {
            profileObj.push(<img src={loading.src} alt="loadFailed" className="rounded-full w-80 h-80"/>)
        }
        else {
        profileObj.push(<img src={picture} alt="loadFailed" className="rounded-full w-80 h-80"/>)
        }
    }

    populateProfilePic();

return (
    <div className = "flex justify-center">
        {profileObj}
    </div>
    )
}