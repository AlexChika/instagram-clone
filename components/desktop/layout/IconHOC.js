import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import layout from "./layout.module.css";

const IconHOC = (Icon, path) => {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const pathname = router.pathname;
    const page = pathname.split("/").at(-1);

    if (page === path) {
      setIsActive(true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Icon className={isActive ? layout.iconActive : ""} active={isActive} />
  );
};

export default IconHOC;
