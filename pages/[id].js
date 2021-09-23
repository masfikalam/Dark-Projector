import Image from "next/image";
import { useRouter } from "next/router";
import { FaFilm, FaHatCowboy, FaPencilAlt, FaUserSecret } from "react-icons/fa";
import { SiImdb } from "react-icons/si";
import { TiMediaFastForward } from "react-icons/ti";
import HeadTag from "../components/HeadTag";

export async function getServerSideProps(context) {
  const res = await fetch(
    `https://imdb-api.com/en/API/Title/${process.env.NEXT_PUBLIC_KEY_2}/${context.params.id}`
  );
  const data = await res.json();
  return { props: { details: data } };
}

export default function Details({ details }) {
  const router = useRouter();

  // go to trailer youtube link
  const viewTrailer = async () => {
    const res = await fetch(
      `https://imdb-api.com/en/API/YouTubeTrailer/${process.env.NEXT_PUBLIC_KEY_2}/${details.id}`
    );
    const data = await res.json();
    data.videoUrl && router.push(data.videoUrl);
  };

  return (
    <>
      <HeadTag title={`${details.title} (${details.year})`} />

      <section className="py-5 px-3 px-lg-5 mx-lg-5 row">
        <div className="col-md-4 text-center">
          <Image
            width={450}
            height={650}
            src={details.image}
            alt={details.title}
            className="rounded mb-5"
          />
        </div>

        <div className="col-md-8 ps-sm-5">
          <h1 className="chela-font red-color">{details.fullTitle}</h1>
          <h4 className="mb-5">{details.genres}</h4>

          <h4 className="lead mb-1 d-flex align-items-center">
            <SiImdb className="text-warning me-2" />
            <span>
              Rating : {details.imDbRating ? details.imDbRating : "N/A"}
            </span>
          </h4>

          {details.type === "TVSeries" && (
            <h4 className="lead mb-1 d-flex align-items-center">
              <TiMediaFastForward className="text-warning me-2" />
              Seasons : {details.tvSeriesInfo.seasons.length}
            </h4>
          )}

          <h4 className="lead mb-1 d-flex align-items-center">
            <FaFilm className="text-warning me-2" />
            Runtime : {details.runtimeStr ? details.runtimeStr : "N/A"}
          </h4>

          <h4 className="lead mb-1 d-flex align-items-center">
            <FaHatCowboy className="text-warning me-2" />
            By :{" "}
            {details.type === "TVSeries"
              ? details.tvSeriesInfo.creators
              : details.directors
              ? details.directors
              : "N/A"}
          </h4>

          <div className="row my-3 px-2">
            <button
              className="col-sm-4 col-xl-3 col-xxl-2 btn btn-warning"
              onClick={viewTrailer}
            >
              Watch trailer
            </button>
          </div>

          <p className="lead mt-5">
            <FaPencilAlt className="text-warning me-2 mb-1" />
            Summary : {details.plot ? details.plot : "N/A"}
          </p>
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
                  height="90"
                  src={actor.image}
                  alt={actor.name}
                  className="rounded-pill"
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
    </>
  );
}
