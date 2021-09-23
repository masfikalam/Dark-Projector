import Head from "next/head";

export default function HeadTag({ title }) {
  return (
    <Head>
      <meta name="author" content="Dark Projector" />
      <meta name="theme-color" content="#000000" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Browse your favorite movie / series" />
      <meta
        name="keywords"
        content="movies, series, darkprojector, online, imdb, info"
      />
      <meta itemProp="name" content="Dark Projector" />
      <meta
        itemProp="description"
        content="Dark Projector - Browse your favorite movie / series"
      />
      <meta itemProp="image" content="https://i.ibb.co/kBMRLxy/projector.png" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Dark Projector" />
      <meta property="og:url" content="https://dark-projector.vercel.app/" />
      <meta
        property="og:description"
        content="Dark Projector - Browse your favorite movie / series"
      />
      <meta
        property="og:image"
        content="https://i.ibb.co/kBMRLxy/projector.png"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Dark Projector" />
      <meta
        name="twitter:description"
        content="Dark Projector - Browse your favorite movie / series"
      />
      <meta
        name="twitter:image"
        content="https://i.ibb.co/kBMRLxy/projector.png"
      />

      <title>{title}</title>
      <link rel="icon" href="/icon.png" />
    </Head>
  );
}
