"use client"

export default function ProfilePic() {
    const profileObj:any = []
    const profile:any = sessionStorage.getItem("Spotify-Profile");

    const populateProfilePic = () => {
        const picture = JSON.parse(profile).images[0].url as string;
        profileObj.push(<img src={picture} alt="loadFailed" className="rounded-full w-80 h-80"/>)
        }

        populateProfilePic()

return (
    <div className = "flex justify-center">
        {profileObj}
    </div>
    )
}

