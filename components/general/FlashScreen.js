import React, { useRef } from "react";
import Image from "next/image";
import getImage from "utils/hooks/getImage";
import SetHeight from "utils/hooks/mobileSetHeight";

const { instaLogoPng, metaLogoPng } = getImage();

// app
const FlashScreen = () => {
  const FlashScreenRef = useRef(null);
  SetHeight(FlashScreenRef, 0);

  return (
    <section
      ref={FlashScreenRef}
      className="bg-white h-screen flex-col flex justify-center items-center relative"
    >
      <div className="h-20 w-20 relative">
        <Image priority layout="fill" src={instaLogoPng} alt="Insta icon" />
      </div>

      <div className="absolute h-10 w-16 bottom-[40px]">
        <Image priority layout="fill" src={metaLogoPng} alt="insta logo" />
      </div>
    </section>
  );
};

export default FlashScreen;
