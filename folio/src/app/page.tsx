import Image from "next/image";
import styles from "@/styles/layout.module.scss"
import { hrtime } from "process";

export default function Home() {
  return (
    <div>
      <div>
        <div className={styles.body}>
          <header className={styles.head}>
            <div>
              <h1>Sebastian Medina</h1>
              <h2>Ingeniero de Sistemas</h2>
              <p>Estudiante de ingenieria de sistemas y Administrador de Red</p>
              <nav>
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">About</a></li>
                  <li><a href="/services">Services</a></li>
                  <li><a href="/contact">Contact</a></li>
                </ul>
              </nav>
            </div>
            <ul>
              <li><a href="https://github.com/tu-usuario" target="_blank"></a></li> 
              <li><a href="https://linkedin.com/in/tu-usuario" target="_blank"></a></li> 
              <li><a href="https://codepen.io/tu-usuario" target="_blank"></a></li> 
              <li><a href="https://twitter.com/tu-usuario" target="_blank"></a></li> 
              <li><a href="https://www.goodreads.com/tu-usuario" target="_blank"></a></li> 
            </ul>
          </header>
          <main className={styles.container}>
            <div>
              <section>
                <p>ME GUSTA PROGRAMAR PAGINAS WEB</p>
              </section>
              <section>
                <p>INSTALCION DE FIBRA OPTICA</p>
              </section>
              <section>
                <p>ETC</p>
                </section> 
              </div> 
            <footer>
              
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
