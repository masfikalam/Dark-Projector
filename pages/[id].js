import Image from "next/image";
import { FaFilm, FaHatCowboy, FaPencilAlt, FaUserSecret } from "react-icons/fa";
import { SiImdb } from "react-icons/si";

export async function getServerSideProps(context) {
  const res = await fetch(
    `https://imdb-api.com/en/API/Title/${process.env.NEXT_PUBLIC_KEY_2}/${context.params.id}`
  );
  const data = await res.json();
  return { props: { details: data } };
}

export default function Details({ details }) {
  return (
    <section className="py-5 px-3 px-lg-5 mx-lg-5 row">
      <div className="col-md-4">
        <Image
          width={450}
          height={650}
          src={details.image}
          alt={details.title}
        />
      </div>

      <div className="col-md-8 ps-5">
        <h1 className="chela-font red-color">{details.fullTitle}</h1>
        <h4 className="mb-5">{details.genres}</h4>

        {details.imDbRating && (
          <h4 className="lead mb-1 d-flex align-items-center">
            <SiImdb className="text-warning me-2" />
            <span>Rating : {details.imDbRating}</span>
          </h4>
        )}

        {details.runtimeStr && (
          <h4 className="lead mb-1 d-flex align-items-center">
            <FaFilm className="text-warning me-2" />
            Runtime : {details.runtimeStr}
          </h4>
        )}

        {details.directors && (
          <h4 className="lead mb-1 d-flex align-items-center">
            <FaHatCowboy className="text-warning me-2" />
            By : {details.directors}
          </h4>
        )}

        {details.plot && (
          <p className="lead my-5">
            <FaPencilAlt className="text-warning me-2 mb-1" />
            Summary : {details.plot}
          </p>
        )}
      </div>

      <div className="col-12">
        <p className="lead my-3 d-flex align-items-center">
          <FaUserSecret className="text-warning me-2 mb-1" />
          Top Cast :
        </p>
        <div className="row mt-4 ps-4 ps-lg-0">
          {details.actorList?.map((actor) => (
            <div
              key={actor.id}
              className="col-md-6 col-lg-4 col-xl-3 d-flex align-items-center mb-4"
            >
              <Image
                width="70"
                height="100"
                src={actor.image}
                alt={actor.name}
                className="rounded"
              />
              <div className="ms-3 d-flex flex-column justify-content-center">
                <p className="mb-0">{actor.name}</p>
                <small className="text-warning">{actor.asCharacter}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
