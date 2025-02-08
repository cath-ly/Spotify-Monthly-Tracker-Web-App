import dog from "../../favicon.png"

export default function ProfilePic() {
    const profileObj:any = []

    const populateProfilePic = () => {
    profileObj.push(<img src={dog.src} alt="loadFailed" className="rounded-full w-80 h-80"/>)
    }


populateProfilePic()

return (
    <div className = "flex justify-center">
        {profileObj}
    </div>
  )
}