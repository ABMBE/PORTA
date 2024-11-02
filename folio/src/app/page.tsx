import Image from "next/image";
import styles from "@/styles/layout.module.scss";
import Link from 'next/link';
import { hrtime } from "process";

export default function Home() {
  return (
    <div>
      <div>
        <div className={styles.body}>
          <header className={styles.head}>
            <div className={styles.first}>
              <div>
              <h1>Sebastian Medina</h1>
              <h2>Ingeniero de Sistemas</h2>
              <p>Estudiante de ingenieria de sistemas y Administrador de Red</p>
              </div>
              <div>
                <nav>
                  <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/app/proyects">Project</a></li>
                    <li><a href="/contact">Contact</a></li>
                  </ul>
                </nav>
              </div>
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
                <div>
                <p>Estudiante de Ingeniería de Sistemas cursando el primer año de mi carrera, me interesa mucho la tecnología
                y el uso tan productivo que esta puede tener en nuestro día a día, me gusta mucho el mundo de la programación
                y de la Ciberseguridad.</p>
                <p>Soy egresado de la carrera de Administración de Redes y Comunicaciones de Datos,
                cuento con experiencia en diseñar, implementar y mantener infraestructuras de red. 
                Mi enfoque se centra en la seguridad, la optimización del rendimiento y la resolución de problemas</p>
                </div>
              </section>
              <section>
              </section>
              <section>
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
