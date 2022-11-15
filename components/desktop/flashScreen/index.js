import React from "react";
import Image from "next/image";
import getImage from "../../../utils/hooks/getImage";

const { instaIconPng, metaLogoPng } = getImage();
// app
const DesktopFlashScreen = () => {
  return (
    <section className="min-h-screen flex-col flex justify-center items-center relative">
      <Image src={instaIconPng} alt="Insta icon"></Image>

      <div className="absolute h-12 w-20 bottom-10">
        <Image layout="fill" src={metaLogoPng} alt="insta logo"></Image>
      </div>
    </section>
  );
};

export default DesktopFlashScreen;
