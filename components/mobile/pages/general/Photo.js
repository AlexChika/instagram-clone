/* --------------------------------------- */
/*             Photo Component             */
/* --------------------------------------- */
// This component is the Photo content of Photo posts and single Photo post page

import React, { useEffect, useState } from "react";
import useImageSize from "utils/hooks/useImageSize";
import Image from "next/image";

// ...............
const Photo = ({ src }) => {
  const [size, { loading, error }] = useImageSize(src);
  const [imageSize, setImageSize] = useState({
    width: 300,
    height: 300,
  });

  useEffect(() => {
    if (!size) return;
    if (size.width && size.height) {
      setImageSize(size);
    }
  }, [loading, size]);

  return (
    <Image
      layout="responsive"
      src={src}
      width={imageSize.width}
      height={imageSize.height}
      alt="post title"
    />
  );
};

export default Photo;
