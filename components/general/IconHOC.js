import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import layout from "../desktop/layout/layout.module.css";
import { App } from "../../pages/_app";

const IconHOC = (Icon, path) => {
  const router = useRouter();
  const { theme } = App();
  const [isActive, setIsActive] = useState(false);

  const _colors = {
    light: {
      color: "#000000",
      active: "yellow",
    },
    dark: {
      color: "#ffffff",
      active: "green",
    },
  };

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
  }, [theme]);

  return (
    <Icon color={isActive ? colors.active : colors.color} />
    // <Icon className={isActive ? layout.iconActive : ""} active={isActive} />
  );
};

export default IconHOC;
