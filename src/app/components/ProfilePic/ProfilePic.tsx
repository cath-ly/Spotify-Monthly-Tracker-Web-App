"use client";
import dog from "../../favicon.png";
import loading from "../../loading.gif";
export default function ProfilePic(pictureInfo: any) {
  const profileObj: any = [];
  const pic = pictureInfo;
  const populateProfilePic = () => {
    if (pic.pictureInfo == null) {
      profileObj.push(
        <img
          src={loading.src}
          alt="loadFailed"
          className="rounded-full w-80 h-80"
        />
      );
    } else {
      profileObj.push(
        <img
          src={pic.pictureInfo}
          alt="Profile-Pic"
          className="rounded-full w-80 h-80"
        />
      );
    }
  };

  populateProfilePic();

  return <div className="flex justify-center">{profileObj}</div>;
}
