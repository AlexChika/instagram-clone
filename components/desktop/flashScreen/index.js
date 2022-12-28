import React from "react";
import Image from "next/image";
import getImage from "../../../utils/hooks/getImage";

const { instaIconSvg, metaLogoPng } = getImage();
// app
const FlashScreen = () => {
  return (
    <section className="bg-white h-screen flex-col flex justify-center items-center relative">
      <Image src={instaIconSvg} alt="Insta icon" />

      <div className="absolute h-10 w-16 bottom-[60px]">
        <Image layout="fill" src={metaLogoPng} alt="insta logo" />
      </div>
    </section>
  );
};

export default FlashScreen;
