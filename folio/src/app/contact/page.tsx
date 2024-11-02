import styles from "@/styles/layout.module.scss";
import Card from "@/app/components/card";
import Link from "next/link";

const Contact = () => {
    return (
        <div>
            <div>
            <nav>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/project">Projects</Link></li>
                </ul>
                </nav>
            </div>
            <div>
            <h1>Contacto</h1>
            <div className={styles.card}>
                <Card name="Cableado estruturado"></Card>
            </div>
            <h2>vamos a completar el contacto</h2>
            </div>
        </div>
    );
};

export default Contact;