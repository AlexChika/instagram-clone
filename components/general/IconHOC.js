import React, { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import { App } from "../../pages/_app";

const IconHOC = (Icon, path, _class) => {
  const router = useRouter();
  const { theme } = App();
  const [isActive, setIsActive] = useState(false);

  const _colors = useMemo(() => {
    return {
      light: {
        color: "#000000",
        active: "#ff006f", //dark red
      },
      dark: {
        color: "#ffffff",
        active: "teal", //teal
      },
    };
  }, []);

  const [colors, setColors] = useState(theme ? _colors.dark : _colors.light);

  useEffect(() => {
    const pathname = router.pathname.split("/");
    // const page = pathname.at(-1); //caused error on some old browsers
    const page = pathname[pathname.length - 1];

    if (page === path) {
      setIsActive(true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  useEffect(() => {
    setColors(theme ? _colors.dark : _colors.light);
  }, [theme, _colors]);

  return (
    <Icon class={_class} color={isActive ? colors.active : colors.color} />
  );
};

export default IconHOC;
