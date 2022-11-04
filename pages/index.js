import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";

export default function Home() {
  let [screen, setScreen] = useState(false);

  useEffect(() => {
    // console.log(window.matchMedia("(max-width: 600px)"));
    const UA = navigator.userAgent;
    let hasTouchScreen =
      /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
      /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA);
    setScreen(hasTouchScreen);
  }, []);

  return (
    <div>
      <Head>
        <meta name="description" content="Insta clone . created with next js" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />

        <link rel="icon" href="/insta-icon-png.png" />
        <title>Insta Cloned</title>
      </Head>
      <Header />
      <h1 className="relative">Hello guys.. iam alex</h1>x{" "}
      {screen ? (
        <div>
          <p>we have a link ... this is mobile screen</p>
          <Link href="/test">Click to test</Link>
        </div>
      ) : (
        <div>
          <p>we have a link ... this is desktop screen</p>
          <Link href="/test">Click to test</Link>
        </div>
      )}
    </div>
  );
}
