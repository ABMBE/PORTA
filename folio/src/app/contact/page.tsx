import styles from "@/styles/layout.module.scss";
import Link from "next/link";
//import React, { useState } from 'react';

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
            </div>
    );
}

export default Contact;