import Image from "next/image";
import useImage from "../utils/hooks/useImage";
// import instaWordSvg from "../public/insta-word-svg.svg";

// app
function Header() {
  const { instaWordSvg, instaIconSvg } = useImage();

  return (
    <nav className="">
      <span className="blue">
        <Image height={30} width={150} src={instaIconSvg} alt="insta logo" />
      </span>

      <h1>hello here</h1>
    </nav>
  );
}

export default Header;

{
  /* <img src="https://img.icons8.com/fluency/48/000000/instagram-new.png" />; */
}
// return <h1>𝓘𝓷𝓼𝓽𝓪𝓰𝓻𝓪𝓶</h1>;
