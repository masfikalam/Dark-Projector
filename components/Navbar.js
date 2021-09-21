import Image from "next/image";
import Link from "next/link";
import styles from "../styles/navbar.module.css";

export default function Navbar() {
  return (
    <nav className={`${styles.navbar} px-3 px-lg-5 py-3`}>
      <Link href="/" passHref>
        <div className={styles.branding}>
          <Image
            width="50px"
            height="50px"
            src="/logo.png"
            alt="Dark Projector"
          />
          <h1 className="chela-font red-color ms-2 my-0">Dark Projector</h1>
        </div>
      </Link>
    </nav>
  );
}
