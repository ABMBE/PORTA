import styles from "@/styles/layout.module.scss";
import Card from "@/app/components/card";
import Link from "next/link";

const Contact = () => {
    return (
        <div>
            <div className={styles.nav3}>
                <div>
                    <h1>CONTACT</h1>
                    <nav>
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/project">Projects</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div>
                <div>
                    
                </div>
            </div>
        </div>
    );
};

export default Contact;