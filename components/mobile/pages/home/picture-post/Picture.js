import React from "react";
import Image from "next/image";

// ...............
const Picture = () => {
  return (
    <div className="relative">
      <Image layout="fill" src="/alex.png" alt="post title" />
    </div>
  );
};

export default Picture;
