import Head from "next/head";

import React from "react";

const Header = () => {
  return (
    <Head>
      <meta name="description" content="Insta clone . created with next js" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
      />

      <link rel="icon" href="/insta-icon-png.png" />
      <title>Insta Cloned</title>
    </Head>
  );
};

export default Header;
