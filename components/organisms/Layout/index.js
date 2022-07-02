/* eslint-disable react/prop-types */
import Head from "next/head";
import { BASE_URL } from "../../../utils";

export default function Layout({
  children,
  title,
  description,
  keyword,
  ogUrl,
  ogImage,
  ogImageAlt,
}) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={keyword} />
        <meta name="description" content={description} />
        <meta charSet="utf-8" />

        <meta name="og:url" content={ogUrl} />
        <meta name="og:type" content="article" />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
        <meta name="og:image" content={ogImage} />
        <meta name="og:image:alt" content={ogImageAlt} />
        <meta name="og:locale" content="id_ID" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={ogUrl} />
        <meta name="twitter:image" content={ogImage} />

        <link rel="icon" href="/favicon.ico" />
        <title>{title}</title>
      </Head>
      {children}
    </>
  );
}

Layout.defaultProps = {
  title: "Topup Web - Get a New Experience in Gaming",
  keyword: "game, gaming, topup",
  description:
    "Kami menyediakan jutaan cara untuk membantu players menjadi pemenang sejati.",
  ogUrl: BASE_URL || "http://localhost:3000",
  ogImage: "No Image",
  ogImageAlt: "No Image",
};
