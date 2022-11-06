import React from "react";
import Image from "next/image";
import getImage from "../../../utils/hooks/getImage";

const { instaIconPng, metaLogoPng } = getImage();
// app
const DesktopFlashScreen = () => {
  return (
    <section className="min-h-screen flex-col flex justify-center items-center relative">
      <Image src={instaIconPng}></Image>

      <div className="absolute h-12 w-20 bottom-10">
        <Image layout="fill" src={metaLogoPng}></Image>
      </div>
    </section>
  );
};

export default DesktopFlashScreen;
