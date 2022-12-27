import React, { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import layout from "../desktop/layout/layout.module.css";
import { App } from "../../pages/_app";

const IconHOC = (Icon, path) => {
  const router = useRouter();
  const { theme } = App();
  const [isActive, setIsActive] = useState(false);

  const _colors = useMemo(() => {
    return {
      light: {
        color: "#000000",
        active: "#e60000", //dark red
      },
      dark: {
        color: "#ffffff",
        active: "purple",
      },
    };
  }, []);

  const [colors, setColors] = useState(theme ? _colors.dark : _colors.light);

  useEffect(() => {
    const pathname = router.pathname;
    const page = pathname.split("/").at(-1);

    if (page === path) {
      setIsActive(true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  useEffect(() => {
    setColors(theme ? _colors.dark : _colors.light);
  }, [theme, _colors]);

  return <Icon color={isActive ? colors.active : colors.color} />;
};

export default IconHOC;
