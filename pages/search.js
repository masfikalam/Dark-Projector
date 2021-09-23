import Image from "next/image";
import Link from "next/link";
import ErrorAPI from "../components/ErrorAPI";
import HeadTag from "../components/HeadTag";
import styles from "../styles/search.module.css";

// getting results based on search keyword
export async function getServerSideProps(context) {
  const { type, term } = context.query;
  const res = await fetch(
    `https://imdb-api.com/en/API/${type}/${process.env.NEXT_PUBLIC_KEY}/${term}`
  );
  const data = await res.json();
  return { props: { searchData: data } };
}

export default function SearchPage({ searchData }) {
  // if maximum API calls reached, say SORRY
  if (searchData.errorMessage) {
    return (
      <>
        <HeadTag title="Sorry ☹️ ☹️ ☹️" />
        <ErrorAPI />
      </>
    );
  }

  return (
    <>
      <HeadTag title={`Search - ${searchData.expression}`} />

      <section className="py-5 px-3 px-md-5">
        <h3>Search results for - {searchData.expression}</h3>

        <div className="d-flex flex-wrap justify-content-center justify-content-xl-start">
          {searchData.results.map((result) => (
            <div key={result.id} className={`m-3 ${styles.hover}`}>
              <Link href={"/" + result.id} passHref>
                <div className={`${styles.boxes} h-100 mx-auto`}>
                  <Image
                    width={200}
                    height={270}
                    src={result.image}
                    alt={result.title}
                  />

                  <div className={styles.hide}>
                    <h4 className="ms-2 ms-xxl-1">{result.description}</h4>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
