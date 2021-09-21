import Image from "next/image";
import Link from "next/link";
import styles from "../styles/search.module.css";

export async function getServerSideProps(context) {
  const { type, term } = context.query;
  const res = await fetch(
    `https://imdb-api.com/en/API/${type}/${process.env.NEXT_PUBLIC_KEY_2}/${term}`
  );
  const data = await res.json();
  return { props: { searchData: data } };
}

export default function SearchPage({ searchData }) {
  if (searchData.errorMessage) {
    return <h3>{searchData.errorMessage}</h3>;
  }

  return (
    <section className="py-5 px-3 px-lg-5">
      <h3>Search results for - {searchData.expression}</h3>

      <div className="row">
        {searchData.results.map((result) => (
          <div key={result.id} className="col-sm-6 col-md-4 col-xl-3 col-xxl-2">
            <Link href={"/" + result.id} passHref>
              <div className={`${styles.boxes} mx-auto`}>
                <Image
                  src={result.image}
                  width="200"
                  height="250"
                  alt={result.title}
                />
                <h4>{result.title}</h4>
                <p>{result.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
