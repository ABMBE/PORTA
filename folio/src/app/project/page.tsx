import styles from "@/styles/layout.module.scss";
import Link from "next/link";

const Projects = () => {
    return (
        <div>
            <div className={styles.nav2}>
                <div>
                    <h1>PROJECTS</h1>
                        <nav>
                            <ul>
                                <li><Link href="/">Home</Link></li>
                                <li><Link href="/contact">Contact</Link></li>
                            </ul>
                        </nav>
                </div>
            </div>
            <div>
                <p> Estos son algunos proyectos que he desarrollado en mi experiencia laboral</p>
            </div>
        </div>
    );
}

export default Projects;
