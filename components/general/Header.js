import Head from "next/head";

const Header = ({
  children,
  title = "Instagram cloned | A complete Instagram clone",
}) => {
  return (
    <Head>
      <meta name="theme-color" content="#ffffff" />

      <meta charSet="utf-8" key="utf-8" />

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        key="viewport"
      />

      <meta
        httpEquiv="X-UA-Compatible"
        content="IE=edge"
        key="X-UA-Compatible"
      />

      <link rel="icon" href="/insta-icon-png.png" key="icon" />

      <meta name="robots" content="index, follow" key="robots" />

      <meta
        name="keywords"
        content="Instagram, clones, cloned, clone, clone instagram, nextJs, instagram nextjs, tailwind css, firebase, instagram firebase,instagram React, insta, insta clone, IamAlex, Alex, alex chika, dev arise"
        key="keywords"
      />

      {/* <meta
        name="google-site-verification"
        content="Y7AhEXjqshRz7CKtM7SSoyyQz4-RxXwebjgPIhgKhVU"
        key="google-site-verification"
      /> */}

      <meta
        content="https://insta-cloned.vercel.app"
        property="og:url"
        key="og:url"
      />

      <meta content="Insta cloned" property="og:site_name" key="og:site_name" />

      <meta content="media" property="og:type" key="og:type" />

      <meta property="og:locale" content="en_NG" key="og:locale" />

      <meta
        name="description"
        content="Not your regular clone. A complete Instagram clone with separate UI for desktop and mobile built with NextJs serverside rendering, firebase and styled with tailwind css. Disclaimer: THIS IS NOT a tutorial project."
        key="description"
      />
      <meta
        content="Not your regular clone. A complete Instagram clone with separate UI for desktop and mobile built with NextJs serverside rendering, firebase and styled with tailwind css. Disclaimer: THIS IS NOT a Tutoria project."
        property="og:description"
        key="og:description"
      />

      <meta
        content="Instagram cloned | A complete Instagram clone"
        property="og:title"
        key="og:title"
      />
      <meta
        name="title"
        content="Instagram cloned | A complete Instagram clone"
        key="title"
      />
      <title>{title}</title>
      {children}
    </Head>
  );
};

export default Header;
