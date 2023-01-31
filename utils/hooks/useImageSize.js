import React, { useEffect, useState } from "react";

function getImage(url) {
  return new Promise((resolve, reject) => {
    if (typeof window === "undefined") {
      return reject("Window is not defined");
    }
    if (!url) {
      return reject("Url is not defined");
    }

    const img = new Image();

    img.addEventListener("load", () => {
      resolve({ width: img.naturalWidth, height: img.naturalHeight });
    });

    img.addEventListener("error", (event) => {
      reject(`${event.type}: ${event.message}`);
    });
    img.src = url;
  });
}

const useImageSize = (url) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [size, setSize] = useState(null);

  useEffect(() => {
    async function call() {
      setLoading(true);
      setSize(null);
      try {
        const { width, height } = await getImage(url);
        setSize({ width, height });
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    call();
  }, [url]);

  return [size, { loading, error }];
};

export default useImageSize;
