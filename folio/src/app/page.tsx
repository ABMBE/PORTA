import Image from "next/image";
import styles from "@/styles/layout.module.scss"
import { hrtime } from "process";

export default function Home() {
  return (
    <div>
      <main>
        <div>
          <nav className={styles.nav}>
            <ul className={styles.navlist}>
              <li className={styles.navitem}><a href="/">Home</a></li>
              <li className={styles.navitem}><a href="/about">About</a></li>
              <li className={styles.navitem}><a href="/services">Services</a></li>
              <li className={styles.navitem}><a href="/contact">Contact</a></li>
            </ul>
          </nav>
        </div>
        <div>
          <h1>Hi I'm</h1>
          <h1>Sebastian Medina</h1>
          <p>Soy Ingeniero de Sistemas y Administrador de red</p>
        </div>
        <div>
          <button>DOWNLOAD CV</button>
          <a href="https://github.com/ABMBE"><img src="C:\Users\zeus_\Downloads\github.png" alt="github" /></a>
        </div>
      </main>
      <footer>
        <p>&copy; 2024 Sebastian Medina</p>
      </footer>
    </div>
  );
}
