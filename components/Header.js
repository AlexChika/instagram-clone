import Image from "next/image";
import useImage from "../utils/hooks/useImage";

// app => the header / nav container
function Header() {
  const { instaWordSvg, instaIconSvg } = useImage();
  return (
    <nav className="">
      <div className="flex mx-auto justify-between  max-w-3xl py-1 red">
        {/* left - side => instagram icon*/}
        <div className="relative h-9 w-32 md:w-36">
          <Image
            objectFit="cover"
            layout="fill"
            src={instaWordSvg}
            alt="insta brand logo"
          />
        </div>
        {/* <div className="md:hidden red">
          <Image height={40} width={40} src={instaIconSvg} alt="insta logo" />
        </div> */}
        {/* middle */}
        {/* right */}
      </div>
    </nav>
  );
}

export default Header;

{
  /* <img src="https://img.icons8.com/fluency/48/000000/instagram-new.png" />; */
}
