import { useRouter } from "next/router";
import { useState } from "react";
import { ImSearch } from "react-icons/im";
import styles from "../styles/header.module.css";

export default function Header() {
  const router = useRouter();
  const [term, setTerm] = useState("");
  const [type, setType] = useState("SearchMovie");

  const searchMovie = (e) => {
    e.preventDefault();
    router.push(`/search?type=${type}&term=${term}`);
  };

  return (
    <section className={`px-3 px-lg-5 ${styles.backcover}`}>
      <h1 className="text-center mb-4">Browse your favorite movie / series </h1>

      <form className={styles.form} onSubmit={searchMovie}>
        <div className="d-flex flex-column flex-sm-row align-items-center">
          <div className={`${styles.group} input-group`}>
            <span className="input-group-text bg-danger px-1 px-sm-3 border-0">
              <select
                className={styles.select}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="SearchMovie">Movie</option>
                <option value="SearchSeries">Series</option>
              </select>
            </span>

            <input
              type="text"
              name="title"
              autoComplete="off"
              className={styles.input}
              placeholder="Type name..."
              onChange={(e) => setTerm(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="btn btn-danger px-4 mt-3 py-sm-2 px-sm-3 rounded-pill m-sm-0 ms-sm-2"
          >
            <ImSearch className="mb-1" />{" "}
            <span className="d-sm-none">Search</span>
          </button>
        </div>
      </form>
    </section>
  );
}
