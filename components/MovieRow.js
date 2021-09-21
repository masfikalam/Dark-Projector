import Image from "next/image";
import Link from "next/link";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { SiImdb } from "react-icons/si";
import styles from "../styles/trending.module.css";

export default function MovieRow({ category, title }) {
  const responsive = {
    0: { items: 2 },
    460: { items: 3 },
    650: { items: 4 },
    770: { items: 5 },
    1024: { items: 6 },
    1200: { items: 8 },
  };

  const items = category.items.map((movie, i) => (
    <div key={movie.id} className={`item ${styles.hover}`} data-value={i + 1}>
      <Link href={"/" + movie.id} passHref>
        <Image
          width={200}
          height={320}
          src={movie.image}
          alt={movie.title}
          className={styles.slide}
        />
      </Link>

      <div className={styles.hide}>
        <h4 className="me-2 me-xxl-3 d-flex align-items-center">
          {title === "Coming Soon" ? (
            movie.releaseState
          ) : (
            <>
              <SiImdb className="text-warning me-2" />
              {movie.imDbRating ? movie.imDbRating : "N/A"}
            </>
          )}
        </h4>
      </div>
    </div>
  ));

  return (
    <section className="py-5 px-3 px-lg-5">
      <h3 className="mb-4">{title} -</h3>

      <AliceCarousel
        items={items}
        disableDotsControls
        responsive={responsive}
        controlsStrategy="alternate"
      />
    </section>
  );
}
