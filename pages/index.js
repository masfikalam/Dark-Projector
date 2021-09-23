import Header from "../components/Header";
import HeadTag from "../components/HeadTag";
import MovieRow from "../components/MovieRow";

export default function Home({ trending100, coming25 }) {
  return (
    <main>
      <HeadTag title="Dark Projector - Movies & Series" />

      <Header />
      <MovieRow category={trending100} title="Trending Movies" />
      <MovieRow category={coming25} title="Coming Soon" />

      <footer className="text-center py-5">
        <p className="mb-1">Dark Projector &copy; 2021</p>
        <p>All rights reserved.</p>
      </footer>
    </main>
  );
}

export async function getServerSideProps() {
  const trending = await fetch(
    `https://imdb-api.com/en/API/MostPopularMovies/${process.env.NEXT_PUBLIC_KEY_2}`
  );
  const coming = await fetch(
    `https://imdb-api.com/en/API/ComingSoon/${process.env.NEXT_PUBLIC_KEY_2}`
  );

  const trending100 = await trending.json();
  const coming25 = await coming.json();

  return { props: { trending100, coming25 } };
}
